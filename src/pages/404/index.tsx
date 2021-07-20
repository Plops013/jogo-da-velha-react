import React from 'react'
import Background from '../../components/Background'
import NotFound from '../../assets/404-not-found.svg';
import './styles.css';

export default function PageNotFound() {
    return (
        <Background>
            <div className="not-found-container">
                <img className='not-found-image' src={NotFound} alt="Usuário" />
                <p className="not-found-message">Opa! Não conseguimos encontar essa pagina por aqui :(</p>
            </div>
        </Background>
    )
}
