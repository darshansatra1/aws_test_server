const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get("/", (req, res) => {
    console.log("GET");
    res.send("HI");
});

io.on('connection', function (client) {

    console.log('client connect...', client.id);

    client.on('typing', function name(data) {
        console.log(data);
        io.emit('typing', data)
    })

    client.on('message', function name(data) {
        console.log(data);
        io.emit('message', data)
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
})

var server_port = process.env.PORT || 3020;
server.listen(server_port, function (err) {
    if (err) throw err;
    console.log('Listening on port %d', server_port);
});