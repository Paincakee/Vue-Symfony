<!-- vue-frontend/src/components/Chat.vue -->

<template>
    <div>
        <h1>Real-time Chat</h1>
        <ul>
            <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
        </ul>
        <input v-model="message" @keyup.enter="sendMessage" placeholder="Type a message">
    </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
    props: ['user'],
    data() {
        return {
            socket: null,
            message: '',
            messages: []
        };
    },
    created() {
        this.socket = io('http://127.0.0.1:3000');

        this.socket.emit('storeUser',  this.user );
        this.socket.on('joined',  (user) =>
            console.log(`user: ${user.username} joined`)
        );

        this.socket.on('message', (msg) => {
            this.messages.push(msg);
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });
    },
    methods: {
        sendMessage() {
            this.socket.emit('message', this.message);
            this.message = '';
        }
    }
};
</script>
