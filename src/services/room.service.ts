import api from "./api.service";

const createRoom = async (): Promise<number> => {
    return (await api.get('/api/code')).data.code;
}

const RoomService = {
    createRoom
}

export default RoomService;




