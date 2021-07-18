import { io } from "socket.io-client";
import { endpoint } from "../settings/settings";
/*
HTTP:

get // Retorna o json com atributo code que é o codigo da sala
/api/code

ws

Actions: CREATE, JOIN
PATH: /app/room/codigosala/create
PAYLOAD: payload: playername, action

*/

