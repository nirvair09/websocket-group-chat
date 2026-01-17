import { createServer } from 'node:http';
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

// const roomName = "room1";

const rooms = new Map();

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on('createRoom', ({ roomId, userName }) => {
        if (rooms.has(roomId)) {
            socket.emit("roomExists", roomId);
            return;
        }

        rooms.set(roomId, { users: new Set() });
        rooms.get(roomId).users.add(socket.id);

        socket.join(roomId);
        socket.emit('roomCreated', roomId);
        console.log("room created", roomId);
    });

    socket.on('joinRoom', async ({ roomId, userName }) => {
        if (!rooms.has(roomId)) {
            socket.emit("roomNotFound", roomId);
            return;
        }

        rooms.get(roomId).users.add(socket.id);
        socket.join(roomId);
        socket.emit("roomJoined", roomId);
        socket.to(roomId).emit("roomNotice", userName);
        console.log("user joined", roomId);
    });

    socket.on('chatMessage', async ({ roomId, message }) => {
        socket.to(roomId).emit('chatMessage', message);
    });

    socket.on('typing', async ({ roomId, userName }) => {
        socket.to(roomId).emit('typing', { roomId, userName });
    });

    socket.on('stopTyping', async ({ roomId, userName }) => {
        socket.to(roomId).emit('stopTyping', { roomId, userName });
    });

    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);

        for (const [roomId, room] of rooms.entries()) {
            if (room.users.has(socket.id)) {
                room.users.delete(socket.id);

                if (room.users.size === 0) {
                    rooms.delete(roomId);
                    console.log("room deleted", roomId);
                }
            }
        }
    });
});



// io.on("disconnect", (socket) => {
//     console.log("a user disconnected", socket.id);
// });

server.listen(3056, () => {
    console.log("server is running on port 3056")
})