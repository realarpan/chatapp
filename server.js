const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    users[socket.id] = username;
    io.emit("user-list", Object.values(users));
  });

  socket.on("message", (data) => {
    io.emit("message", {
      user: users[socket.id],
      text: data,
      time: new Date().toLocaleTimeString()
    });
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("user-list", Object.values(users));
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
