import express from "express";
import { createServer } from 'http'; // Import createServer from http
import { Server } from 'socket.io'; // Import Server from socket.io
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", MessageRoutes)

// const server = app.listen(process.env.PORT || 5000, () => {
//     console.log(`Server is running on port ${server.address().port}`);
// });

// Use createServer from http to create the server
const server = createServer(app);

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
    },
});


global.onlineUsers = new Map();

io.on("connection", (socket) =>{
    global.chatSocket = socket;
    socket.on("add-user", (userId)=> {
        onlineUsers.set(userId, socket.id);
    })
})