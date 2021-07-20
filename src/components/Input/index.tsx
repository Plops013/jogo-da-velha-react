import './styles.css';
interface IInputProps {
    onChange?: (val: string) => void
}

export default function Input({ onChange = () => {} }: IInputProps) {
    return (
        <input onChange={(val) => { onChange(val.target.value) }} className="input-name" placeholder="Digite seu nick..." type="text" maxLength={20} minLength={1} />
    )
}
