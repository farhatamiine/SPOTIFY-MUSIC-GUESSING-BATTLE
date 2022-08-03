const express = require("express");
const app = express();
const _ = require("lodash");
const cors = require("cors");
const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

app.use(cors());
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Hey There");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
