import Background from '../../components/Background';
import './styles.css';
import User from '../../assets/user.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import roomService from '../../services/room.service';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {

    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>('')

    const handleButtonClick = async () => {
        try {
            setLoading(true);
            const code = await roomService.createRoom();
            setLoading(false);
            history.push({
                pathname: '/jogo',
                state: { action: 'CREATE', code, playerName }
            });
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    return (
        <Background>
            <div className="content">
                <img className='' src={User} alt="Usuário" />
                <Input onChange={(inputVal) => setPlayerName(inputVal)}/>
                <Button loading={loading} onClick={handleButtonClick}>CRIAR SALA</Button>
            </div>
        </Background>
    )
}
