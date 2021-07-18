import './styles.css';

export default function Input() {
    return (
        <input className="input-name" placeholder="Digite seu nick..." type="text" maxLength={20} minLength={1} />
    )
}
