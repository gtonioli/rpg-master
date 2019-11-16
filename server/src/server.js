import "@babel/polyfill";
import express from "express";
import {Server} from "http";
import SocketIO from "socket.io";
import SocketHandler from "./socketHandler";

const app = express();
const server = new Server(app);
const io = new SocketIO(server, {
   path: "/rpg-master/socket"
});

const port = process.env.PORT || 3000;

const socketHandler = new SocketHandler(io);

io.on("connection", (socket) => {
   socketHandler.handle(socket);
});

server.listen(port, () => {
   console.log("[INFO] Listening on:" + port);
});
