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
io.on('connection', function (client) {

    console.log('client connect...', client.id);
    //io.emit('message',125);
    client.on('typing', function name(data) {
        console.log(data);
        io.emit('typing', data)
    })

    client.on('message', function name(data) {
        console.log(data);
        io.emit('message', data);
    })

    client.on('messageJS', function name(data) {
        console.log(data);
        io.emit('messageJS', data);
    })

    client.on('location', function name(data) {
        console.log(data);
        io.emit('location', data);
    })

    client.on('connect', function () {
    })

    client.on('disconnect', function () {
        console.log('client disconnect...', client.id)
        // handleDisconnect()
    })

    client.on('error', function (err) {
        console.log('received error from client:', client.id)
        console.log(err)
    })
});

server.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});