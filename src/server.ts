import app from "./app";
import AppDataSource from "./data-source";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

const PORT = 3001;

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  const server = http.createServer(app);
  const io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("Connected User id:", socket.id);

    socket.on("disconnect", (reason) => {
      console.log("User disconnected", socket.id);
    });

    socket.on("set_nickname", (username) => {
      socket.data.username = username;
    });

    socket.on("message", (textMessage) => {
      console.log(textMessage);
      io.emit("receive_messege", {
        textMessage,
        writtenOfMessageId: socket.id,
        nameAuthor: socket.data.username,
      });
    });
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
