import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Background from "../../components/Background";
import Board from "../../components/Board";
import Button from "../../components/Button";
import { gameStatus } from "../../models/game-status";
import { useGame } from "../../providers/game.provider";
import './styles.css';

export default function Game() {

    const locationState = useLocation().state;
    const history = useHistory();

    const { game, error, join, getPlayerTurn, move } = useGame();

    useEffect(() => {
        if (!locationState) {
            history.push('/');
            return;
        }

        const { playerName, roomId } = (locationState as any);
        join(playerName, roomId);
        return () => {
        }
    }, [locationState])

    const handlePlay = (row: number, column: number) => {
        move(row, column);
    }

    const copyRoomLinkToClipboard = () => {
        navigator.clipboard.writeText(`${window.location.host}/sala/${game.id}`);
    }

    return (
        <Background>
            <div className="game-container">
                <Board onClickSquare={(row, column) => handlePlay(row, column)} boardState={game.board} />
                <div className="game-info">
                    {(!!error) && (
                        <p className="game-error">
                            {error}
                        </p>
                    )}
                    <p className="game-status">
                        {(!!game) && gameStatus[game.status]}
                    </p>
                    <p className="player-turn">
                        Vez de <span>{getPlayerTurn().name}</span>
                    </p>
                    <Button type="PRIMARY" onClick={copyRoomLinkToClipboard}>COPIAR LINK</Button>
                </div>
            </div>
        </Background>
    );
}
