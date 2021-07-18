import { endpoint } from "../settings/settings";
import Stomp from 'stompjs';
/*
Actions: CREATE, JOIN
PATH: /app/room/codigosala/create
PAYLOAD: payload: playername, action
*/

let client: Stomp.Client;

const connect = (): Promise<void> => {
    const wsEnpoint = endpoint.replace('http', 'ws');
    client = Stomp.client(`${wsEnpoint}/ws`);
    return new Promise((res, rej) => {
        client.connect({},
            () => {
                res();
            },
            () => {
                rej();
            });
    })
}

const disconnect = (): Promise<void> => {
    return new Promise((res, rej) => {
        try {
            client.disconnect(res);
        } catch {
            rej();
        }
    })
}

const isConnected = (): boolean => {
    return client.connected;
}

const subscribeToTopic = (topic: string, messageCallback: (msg: Stomp.Message) => {}): void => {
    client.subscribe(topic, messageCallback);
}

const unsubscribeToTopic = (topic: string): void => {
    client.unsubscribe(topic);
}

const sendMessage = (topic: string, message: string): void => {
    client.send(topic, {}, message);
}

const WebSocketService = {
    connect,
    disconnect,
    isConnected,
    subscribeToTopic,
    unsubscribeToTopic,
    sendMessage
}

export default WebSocketService;
