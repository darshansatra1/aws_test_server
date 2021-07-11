const express = require("express");
const app = express();
var http = require("http");
const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = require("socket.io")(server);

app.use(express.json());

io.on("Connection", (socket) => {
    console.log("Connected");
});

app.get("/", (req, res) => {
    console.log("CONNECTED");
    res.send("");
});

server.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});