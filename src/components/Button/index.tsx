import './styles.css';

interface IButtonProps {
    type?: 'SUCCESS' | 'PRIMARY';
    children?: string;
    onClick?: () => {};
    disabled?: boolean;
}

export default function Button({ type, children, disabled, onClick }: IButtonProps) {

    return (
        <button onClick={onClick} className={`button-container ${disabled && 'disabled'}`} >
            <p className="button-label">{children}</p>
        </button>
    )
}
