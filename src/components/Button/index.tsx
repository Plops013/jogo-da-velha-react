import Spinner from '../Spinner';
import './styles.css';

interface IButtonProps {
    type?: 'SUCCESS' | 'PRIMARY';
    children?: string;
    onClick?: () => any;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({ type, children, disabled, loading, onClick }: IButtonProps) {

    return (
        <button disabled={disabled || loading} onClick={onClick} className={`button-container ${(!!disabled || !!loading) && 'disabled'} ${(type === 'PRIMARY' && 'button-primary') }`} >
            {!!loading && (
                <div className="spinner-container">
                    <Spinner />
                </div>
            )}
            <p className="button-label">{children}</p>
        </button>
    )
}
