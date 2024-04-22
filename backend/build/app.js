"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const PORT = 8443;
const server = new ws_1.default.Server({
    port: PORT,
});
//comentario
server.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");
    socket.send("Welcome to the server!");
    socket.on("message", (message) => {
        const mensaje_texto = message.toString("utf-8");
        console.log("Mensaje recibido desde el cliente:", message);
        server.clients.forEach((client) => {
            client.send(`Mensaje recibido desde el servidor: ${message}`);
        });
    });
});
console.log(`Server running on ws://localhost:${PORT}`);
