import createServer from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    },
});


app.get('/', (req, res) => {
    res.send("hello")
});


io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    console.log("socket info", socket);
});

server.listen(3056, () => {
    console.log("server is running on port 3056")
})