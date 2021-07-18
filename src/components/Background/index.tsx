import { ReactElement } from 'react'
import './styles.css';

interface IBackgroundProps {
    children?: ReactElement;
}

export default function Background({ children }: IBackgroundProps) {
    return (
        <div className="background-container">
            <div className="background" />
            <h1 className="game-name">Jogo da Velha</h1>
            <div className="container">
                {children && children}
            </div>
        </div>
    )
}
