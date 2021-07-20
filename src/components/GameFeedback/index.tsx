interface IGameFeedbackProps {
    image?: string;
    text?: string;
    buttonText?: string;
    buttonAction?: () => void;
}

export default function GameFeedback({
    image,
    text,
    buttonText,
    buttonAction
}: IGameFeedbackProps) {
    return (
        <div>
            <p>FeedBack</p>
        </div>
    )
}
