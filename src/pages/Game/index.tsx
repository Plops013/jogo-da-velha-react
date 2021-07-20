import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Background from "../../components/Background";
import Board from "../../components/Board";
import WebSocketService from "../../services/ws.service";
import './styles.css';

interface IGame {
    playerName: string;
    code: number;
    action: string;
}

export default function Game() {

    const locationState = useLocation().state;
    const history = useHistory();

    const [boardState, setBoardState] = useState<Array<string[]>>();
    const [game, setGame] = useState<IGame>();
    const [playerTurn, setPlayerTurn] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (!locationState) {
            history.push('/');
            return;
        }

        const { code, playerName, action } = (locationState as any);
        setGame({ code, playerName, action });
        connectToServer(code, playerName, action);
        return () => {
            disconnect(code, playerName)
        }
    }, [locationState])

    const connectToServer = async (code: number, playerName: string, action: string) => {
        await WebSocketService.connect();
        WebSocketService.subscribeToTopic(`/room/${code}`, handleRoomMessage);
        WebSocketService.subscribeToTopic(`/game/${code}`, handleGameMessage);
        WebSocketService.sendMessage(`/app/room/${code}`, { action, playerName })
    }

    const disconnect = async (code: number, playerName: string) => {
        WebSocketService.sendMessage(`/app/room/${code}`, { action: 'LEAVE', playerName })
        WebSocketService.disconnect();
    }

    const handleRoomMessage = (message: any) => {
        console.log('Room message:', message);
    }

    const handleGameMessage = (message: any) => {
        const gameMessage = JSON.parse(message.body);
        setPlayerTurn(gameMessage.turn);
        handleBoardUpdate(gameMessage.board);
    }

    const handleBoardUpdate = (newBoardState: Array<string[]>) => {
        if (!game) return;
        const newBoardStateMapped = newBoardState.map((row: string[]) => {
            return row.map((value) => {
                if (value === game.playerName) return game.action === 'CREATE' ? 'X' : 'O';
                else if (value !== '') return game.action === 'CREATE' ? 'O' : 'X'
                else return '';
            })
        })
        setBoardState(newBoardStateMapped);
    }

    const handlePlay = (row: number, column: number) => {
        if (!game) return;
        WebSocketService.sendMessage(`/app/game/${game.code}`, { action: 'MOVE', playerName: game.playerName, x: row, y: column })
    }

    const getPlayerTurnClass = () => {
        if (!game) return;
        return (playerTurn === game.playerName) ?
            (game.action === 'CREATE') ? 'player-x' : 'player-o' :
            (game.action === 'CREATE') ? 'player-o' : 'player-x'
    }

    return (
        <Background>
            <div className="game-container">
                <Board onClickSquare={(row, column) => handlePlay(row, column)} boardState={boardState} />
                <div className="game-info">
                    <p className="room-name">
                        SALA: #{(!!game) && game.code}
                    </p>
                    <p className="player-turn">
                        Vez de <span className={getPlayerTurnClass()}>{playerTurn}</span>
                    </p>
                </div>
            </div>
        </Background>
    );
}
