const express = require("express");
const app = express();
var http = require("http");
const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(express.json());


app.get("/", (req, res) => {
    console.log("CONNECTED");
    res.send("");
});
io.on("connection", (socket) => {
    console.log("Connected");
});

server.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});