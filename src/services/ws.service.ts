import { endpoint } from "../settings/settings";
import Stomp from 'stompjs';

let client: Stomp.Client;

const connect = (): Promise<void> => {
    console.log('::: WS CONNECTING :::');
    const wsEnpoint = endpoint.replace('http', 'ws');
    client = Stomp.client(`${wsEnpoint}/ws`);
    return new Promise((res, rej) => {
        client.connect({},
            () => {
                console.log('::: WS CONNECTED :::');
                res();
            },
            () => {
                console.log('::: WS CONNECTION ERROR :::');
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

const subscribeToTopic = (topic: string, messageCallback: (msg: Stomp.Message) => void): void => {
    console.log(`::: WS SUBSCRIBE TO TOPIC ${topic} :::`);
    client.subscribe(topic, messageCallback);
}

const unsubscribeToTopic = (topic: string): void => {
    console.log(`::: WS UNSUBSCRIBE TO TOPIC ${topic} :::`);
    client.unsubscribe(topic);
}

const sendMessage = (topic: string, message: any): void => {
    console.log(`::: WS SEND MESSAGE ${message} :::`);
    client.send(topic, {}, JSON.stringify(message));
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
