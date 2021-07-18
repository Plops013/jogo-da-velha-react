import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WebSocketService from "../../services/ws.service";

export default function Game() {

    const { code, nickname } = (useLocation().state as any);
    console.log("🚀 ~ file: index.tsx ~ line 6 ~ Game ~ nickname", nickname)
    console.log("🚀 ~ file: index.tsx ~ line 6 ~ Game ~ code", code)

    useEffect(() => {
        WebSocketService.connect();
        WebSocketService.subscribeToTopic('/game', (msg) => { console.log(msg) })
    }, [])
    return (
        <>
            <p>Game</p>
        </>
    );
}
