// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://127.0.0.1:8000', // Symfony backend origin
        methods: ['GET', 'POST'],
        credentials: true
    }
});

app.use(cors());
app.use(express.json());

const users = {}
io.on('connection', (socket) => {

    socket.on('storeUser', (username) => {
        users[username] = { socketId: socket.id, username };
        console.log(users);
        io.emit('joined', users[username])
    });

    socket.on('next-question', (index) => {
        index++;
        console.log('Question index:', index);
        io.emit('next-question', index);
    });

    socket.on('answer-question', (data) => {
        [username, answer] = data
        users[username].answer = answer;
        console.log(users[username])
    })

    socket.on('end-game', (gameOver) => {
        gameOver = true;

        io.emit('end-game', gameOver);
    })

    socket.on('clear-data', () => {
        io.emit('clear-data')
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.get('/users', (req, res) => {
    res.json(Object.values(users));
});

server.listen(3000, () => {
    console.log('Socket.IO server listening on port 3000');
});
