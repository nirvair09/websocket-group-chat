import { io } from "socket.io-client";

export function connectWS() {
    return io(process.env.BACKEND_URL);
};