import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../../components/Background";
import Board from "../../components/Board";
import WebSocketService from "../../services/ws.service";
import './styles.css';

export default function Game() {

    const { code, playerName, action } = (useLocation().state as any);
    const [boardState, setBoardState] = useState<Array<string[]>>();
    const [playerTurn, setPlayerTurn] = useState<string | undefined>(undefined);

    useEffect(() => {
        const connectToServer = async (code: number, playerName: string) => {
            await WebSocketService.connect();
            WebSocketService.subscribeToTopic(`/room/${code}`, handleRoomMessage);
            WebSocketService.subscribeToTopic(`/game/${code}`, handleGameMessage);
            WebSocketService.sendMessage(`/app/room/${code}`, { action, playerName })
        }
        connectToServer(code, playerName);
        return () => {
            WebSocketService.sendMessage(`/app/room/${code}`, { action: 'LEAVE', playerName })
            WebSocketService.disconnect();
        }
    }, [code, playerName])



    const handleRoomMessage = (message: any) => {
        console.log('Room message:', message);
    }

    const handleGameMessage = (message: any) => {
        const gameMessage = JSON.parse(message.body);
        setPlayerTurn(gameMessage.turn);
        handleBoardUpdate(gameMessage.board);
    }


    const handleBoardUpdate = (newBoardState: Array<string[]>) => {
        const newBoardStateMapped = newBoardState.map((row: string[]) => {
            return row.map((value) => {
                if (value === playerName) return action === 'CREATE' ? 'X' : 'O';
                else if (value !== '') return action === 'CREATE' ? 'O' : 'X'
                else return '';
            })
        })
        setBoardState(newBoardStateMapped);
    }

    const handlePlay = (row: number, column: number) => {
        WebSocketService.sendMessage(`/app/game/${code}`, { action: 'MOVE', playerName, x: row, y: column })
    }

    const getPlayerTurnClass = () => {
        return (playerTurn === playerName) ?
            (action === 'CREATE') ? 'player-x' : 'player-o' :
            (action === 'CREATE') ? 'player-o' : 'player-x'
    }

    return (
        <Background>
            <div className="game-container">
                <Board onClickSquare={(row, column) => handlePlay(row, column)} boardState={boardState} />
                <div className="game-info">
                    <p className="room-name">
                        SALA: #{code}
                    </p>
                    <p className="player-turn">
                        Vez de <span className={getPlayerTurnClass()}>{playerTurn}</span>
                    </p>
                </div>
            </div>
        </Background>
    );
}
