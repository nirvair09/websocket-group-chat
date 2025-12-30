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

const roomName = "room1";

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    console.log("socket info", socket);

    socket.on('joinRoom', async (userName) => {
        socket.to(roomName).emit("newUserJoined", userName)
    });

    socket.on('chatMessage', async (message) => {
        socket.to(roomName).emit('chatMessage', message);
    });

    socket.on('typing', async (userName) => {
        socket.to(roomName).emit('typing', userName);
    });

    socket.on('stopTyping', async (userName) => {
        socket.to(roomName).emit('stopTyping', userName);
    });
});

io.on("disconnect", (socket) => {
    console.log("a user disconnected", socket.id);
});

server.listen(3056, () => {
    console.log("server is running on port 3056")
})