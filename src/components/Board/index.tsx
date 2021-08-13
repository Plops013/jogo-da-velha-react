import './styles.css';

interface IBoardProps {
    boardState?: Array<string[]>;
    onClickSquare: (row: number, column: number) => void;
}

export default function Board({ boardState, onClickSquare }: IBoardProps) {

    const isPositionChecked = (row: number, column: number) => {
        return !!boardState && !!boardState[row][column];
    }

    const positionValue = (row: number, column: number): string => {
        return !!boardState ? boardState[row][column] : '';
    }

    return (
        <div className='board-container'>
            {
                boardState?.map((boardRow, rowIndex) =>
                (
                    <div key={rowIndex} className="board-row">
                        {
                            boardRow.map((_value, columIndex) =>
                            (<div key={columIndex} onClick={() => onClickSquare(rowIndex, columIndex)} className="board-square">
                                <p className={positionValue(rowIndex, columIndex)}>{isPositionChecked(rowIndex, columIndex) && positionValue(rowIndex, columIndex)}</p>
                            </div>)
                            )
                        }
                    </div>
                )
                )
            }
        </div>
    );
}
