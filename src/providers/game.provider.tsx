import { useEffect, useState } from 'react';
import {
    createContext,
    useContext
} from 'react';
import { io } from 'socket.io-client';
import { Game, Player } from '../models/game.model';
import { endpoint } from '../settings/settings';

interface IGameContext {
    game: Game,
    setGame: (game: Game) => void,
    join: (username: string, room?: string) => void,
    move: (x: number, y: number) => void,
    restart: () => void,
    leave: () => void,
    getLocalPlayer: () => Player,
    getPlayerTurn: () => Player,
    error: string | undefined;
}

const GameContext = createContext<IGameContext | null>(null);

const wsEnpoint = endpoint.replace('http', 'ws');
const socket = io(wsEnpoint, { multiplex: false });

const GameProvider = ({ children }: any) => {

    const [game, setGame] = useState<Game>(new Game());
    const [error, setError] = useState<string>();

    useEffect(() => {
        socket.connect();
        socket.on('connect', () => {
            socket.on('room', handleGameRoomMessage);
            socket.on('game-error', handleGameErrorMessage);
        })

        return () => {
            console.log('disconnect');
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        console.log("🚀 ~ file: game.provider.tsx ~ line 46 ~ GameProvider ~ game", game)
    }, [game])

    const handleGameRoomMessage = (...event: any) => {
        setGame({
            ...event[0],
            player1: {
                ...event[0].player1,
                isLocalPlayer: !!event[0]?.player1?.id ? event[0].player1.id === socket.id : false
            },
            player2: {
                ...event[0].player2,
                isLocalPlayer: !!event[0]?.player2?.id ? event[0].player2.id === socket.id : false
            },
            board: event[0].board.map((row: Array<string>) => {
                return row.map((column: string) => {
                    console.log("🚀 ~ file: game.provider.tsx ~ line 62 ~ returnrow.map ~ column", column)
                    return (!!column) ? (column === event[0].player1.id) ? 'X' : 'O' : '';
                })
            })
        });
    }

    const getLocalPlayer = () => {
        return (game.player1.isLocalPlayer) ? game.player1 : game.player2;
    }

    const getPlayerTurn = () => {
        return (game.player1.id === game.turn) ? game.player1 : game.player2
    }

    const handleGameErrorMessage = (...event: any) => {
        setError(event[0].error);
    }

    const join = (username: string, room?: string) => {
        socket.emit('join', { username, room });
    }

    const move = (x: number, y: number) => {
        socket.emit('move', { x, y });
    }

    const restart = () => {
        socket.emit('restart', { wantTo: true })
    }

    const leave = () => {
        socket.emit('leave');
    }

    return (
        <GameContext.Provider value={{ game, setGame, join, move, restart, leave, getLocalPlayer, getPlayerTurn, error }}>
            {children}
        </GameContext.Provider>
    );
};

function useGame(): IGameContext {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error(`useGame deve ser usado dentro do GameProvider`);
    }

    return context;
}

export { GameProvider, useGame };
