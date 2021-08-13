export class Game {
    public player1: Player = {
        id: '',
        name: '',
        isLocalPlayer: false
    };
    public player2: Player = {
        id: '',
        name: '',
        isLocalPlayer: false
    };
    public id: string = '';
    public board: Array<Array<string>> = [];
    public turn: string = '';
    public status: string = '';
    public restartVote: RestartVote = {
        player1: false,
        player2: false
    }
}

export interface Player {
    id: string,
    name: string,
    isLocalPlayer: boolean
}

interface RestartVote {
    player1: boolean,
    player2: boolean,
}