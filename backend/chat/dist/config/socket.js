import { Server, Socket } from "socket.io";
import http from "http";
import express from "express";
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
const userSocketMap = {};
export const getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
};
io.on("connection", (socket) => {
    console.log("User Connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
        console.log(`USer ${userId} mapped to socket ${socket.id}`);
    }
    io.emit("getOnlineUser", Object.keys(userSocketMap));
    if (userId) {
        socket.join(userId);
    }
    socket.on("typing", (data) => {
        console.log(`User ${data.userId} is typing in chat ${data.chatId}`);
        socket.to(data.chatId).emit("userTyping", {
            chatId: data.chatId,
            userId: data.userId
        });
    });
    socket.on("stopTyping", (data) => {
        console.log(`User ${data.userId} stopped typing in chat ${data.chatId}`);
        socket.to(data.chatId).emit("userStoppedTyping", {
            chatId: data.chatId,
            userId: data.userId
        });
    });
    socket.on("joinChat", (chatId) => {
        socket.join(chatId);
        console.log(`User ${userId} joined chat room ${chatId}`);
    });
    socket.on("leaveChat", (chatId) => {
        socket.leave(chatId);
        console.log(`User ${userId} leave chat room ${chatId}`);
    });
    socket.on("disconnect", () => {
        console.log("A user is Disconnected", socket.id);
        if (userId) {
            delete userSocketMap[userId];
            console.log(`User Disconnected with ${userId}`);
            io.emit("getOnlineUser", Object.keys(userSocketMap));
        }
    });
    socket.on("connect_error", (error) => {
        console.log("Socket connection Error :", error);
    });
});
export { app, server };
//# sourceMappingURL=socket.js.map