const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connect", (socket) => {
  console.log("user connected", socket.id);
});

app.use(express.static("public"));

httpServer.listen(5000);
