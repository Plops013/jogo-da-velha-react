import Background from '../../components/Background';
import './styles.css';
import User from '../../assets/user.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import roomService from '../../services/room.service';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const handleButtonClick = async () => {
        try {
            // const code = await roomService.createRoom();
            history.push({
                pathname: '/jogo',
                state: { code: 'testando', nickname: 'josé' }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Background>
            <div className="content">
                <img src={User} alt="Usuário" />
                <Input />
                <Button onClick={handleButtonClick}>CRIAR SALA</Button>
            </div>
        </Background>
    )
}
