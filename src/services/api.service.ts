import Axios from "axios";
import { endpoint } from "../settings/settings";

const axios = Axios.create();

axios.interceptors.request.use(async (config) => {
    config = {
        ...config,
        baseURL: endpoint,
        timeout: 60000,
        headers: {
        }
    }
    return config;
})

const get = <T = any>(uri: string, data?: any): Promise<T> => {
    return axios.get(`${uri}`, { params: data });
}

const post = <T = any>(uri: string, data?: any): Promise<T> => {
    return axios.post(`${uri}`, data);
}

const patch = <T = any>(uri: string, data?: any): Promise<T> => {
    return axios.patch(`${uri}`, data);
}

const put = <T = any>(uri: string, data?: any): Promise<T> => {
    return axios.put(`${uri}`, data);
}

const del = <T = any>(uri: string, data?: any): Promise<T> => {
    return axios.delete(`${uri}`, data);
}

const api = {
    get,
    post,
    patch,
    put,
    delete: del 
}

export default api;