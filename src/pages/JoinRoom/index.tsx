import Background from '../../components/Background';
import './styles.css';
import User from '../../assets/user.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

interface IParams {
    code: string;
}

export default function JoinRoom() {

    const history = useHistory();
    const { code } = useParams<IParams>();
    const [playerName, setPlayerName] = useState<string>('')

    const handleButtonClick = async () => {
        history.push({
            pathname: '/jogo',
            state: { action: 'JOIN', roomId: code, playerName }
        });
    }

    return (
        <Background>
            <div className="content">
                <img src={User} alt="Usuário" />
                <Input onChange={(inputVal) => setPlayerName(inputVal)} />
                <Button onClick={handleButtonClick}>ENTRAR NA SALA</Button>
            </div>
        </Background>
    );
}
