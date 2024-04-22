import ws from "ws";

const PORT = 8443;

const server = new ws.Server({
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
