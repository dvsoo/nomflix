const express = require("express"),
  socketIO = require("socket.io"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"),
  db = require("./db"),
  Message = require("./models"),
  app = express(),
  server = http.createServer(app),
  io = socketIO(server);

const PORT = 4000;

const handleSocketConnect = socket => {
  socket.on("new message sent", data => {
    ////왜 pong을 fuck으로 바꾸니까 되는걸까?
    ///console.log("ping");
    //console.log(data);
    //socket.emit("new message notification", data);
    //console.log(data);
    const { message, creator } = data;
    Message.create({
      message,
      creator
    });
    socket.broadcast.emit("notification", data);
    ///io.emit("pong");
  });
};

const handleGetMessage = (req, res) => {
  Message.find().then(messages => res.json({ messages }));
};

app.get("/messages", handleGetMessage);

const handleListening = () =>
  console.log(`Server Running on: http://localhost:${PORT}`);

server.listen(PORT, handleListening);
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
io.on("connection", handleSocketConnect);

Message.find().then(messages => console.log(messages));
