<template>
    <div class="game-container d-flex align-items-center flex-column">
        <div class="header mt-4">
            <div class="title-wrapper d-flex justify-content-between">
                <h1 class="m-0 fs-3">{{quiz.title}} - {{player.score}} - {{gameOver}}</h1>
                <h1 class="m-0 fs-3">{{questionIndex + 1}} of {{ quiz.questions.length }}</h1>
            </div>
            <div class="progress mt-1">
                <div class="progress-bar"
                     role="progressbar"
                     :aria-valuenow="getProgressPercentage()"
                     aria-valuemin="0"
                     aria-valuemax="100"
                     :style="{ width: getProgressPercentage() + '%' }"
                >
                    {{ getProgressPercentage() }}%
                </div>
            </div>
            <img :src="image" alt="" class="game-image mt-1"/>
        </div>
        <div v-if="!gameOver && quiz.questions && questionIndex < quiz.questions.length" class="mt-2 wrapper">
            <div class="game-question d-flex align-items-center">
                <div class="game-index d-flex align-items-center justify-content-center me-2">
                    <span class="fs-2">{{questionIndex + 1}}</span>
                </div>
                <h3 class="m-0">{{ quiz.questions[questionIndex].question }}</h3>
            </div>
            <div class="answer-grid d-flex flex-column">
                <button
                    v-for="(answer, index) in quiz.questions[questionIndex].answers"
                    :key="answer.id"
                    class="game-answer"
                    @click="answerQuestion(answer)"
                    :class="{ 'active-answer': answer.id === activeAnswerId }"
                >
                    <h2><span class="answer-index">{{ String.fromCharCode(65 + index) }}</span> {{ answer.answer }}</h2>
                </button>
            </div>
        </div>
        <p v-else-if="gameOver" class="kahoot-message">No questions available</p>
        <div class="admin-group">
            <button @click="nextQuestion" v-if="player.admin && !gameOver" class="kahoot-button">Next Question</button>
            <button @click="resetData" v-if="player.admin" class="kahoot-button">Reset Data</button>
        </div>
    </div>
</template>

<script>
import { io } from "socket.io-client";
import axios from "axios";
import encoreImage from '../../images/encore.jpg';

export default {
    props: {
        quiz: {
            type: Object,
            required: true,
        },
        currentUser: {
            type: Object,
        },
    },
    data() {
        return {
            questionIndex: 0,
            gameOver: false,
            player: {
                user: this.currentUser,
                answer: null,
                score: 0,
                admin: false,
            },
            clickable: true,
            socket: null,
            activeAnswerId: null,
            image: encoreImage,
        };
    },
    created() {
        this.initializeSocket();
    },
    mounted() {
        this.loadFromLocalStorage();
        this.checkAdminRole();
    },
    methods: {
        initializeSocket() {
            this.socket = io("http://127.0.0.1:3000");

            this.socket.emit("storeUser", this.currentUser.username);
            this.socket.on("joined", (user) => console.log(`User: ${user.username} joined`));
            this.socket.on("next-question", this.handleNextQuestion);
            this.socket.on("end-game", this.handleEndGame);
            this.socket.on("clear-data", this.clearLocalData);
        },
        loadFromLocalStorage() {
            const storedQuestionIndex = localStorage.getItem("questionIndex");
            const storedGameOver = localStorage.getItem("gameOver");
            const storedScore = localStorage.getItem("playerScore");
            const storedClickable = localStorage.getItem("clickable");

            if (storedQuestionIndex !== null) this.questionIndex = parseInt(storedQuestionIndex);
            if (storedGameOver !== null) this.gameOver = JSON.parse(storedGameOver);
            if (storedScore !== null) this.player.score = parseInt(storedScore);
            if (storedClickable !== null) this.clickable = JSON.parse(storedClickable);
        },
        checkAdminRole() {
            if (this.currentUser.roles.includes("ROLE_ADMIN")) {
                this.player.admin = true;
            }
        },
        handleNextQuestion(index) {
            this.checkCorrect();
            this.questionIndex = index;
            this.clickable = true;
            this.activeAnswerId = null;
            this.player.answer = null;
            this.updateLocalStorage();
        },
        handleEndGame(gameOver) {
            this.gameOver = gameOver;
            this.checkCorrect();
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            localStorage.setItem("questionIndex", this.questionIndex);
            localStorage.setItem("playerScore", this.player.score);
            localStorage.setItem("clickable", this.clickable);
            localStorage.setItem("gameOver", this.gameOver);
        },
        nextQuestion() {
            if (this.questionIndex < this.quiz.questions.length - 1) {
                this.checkAllAnswersProvided().then(answered => {
                    if (answered) this.socket.emit("next-question", this.questionIndex);
                });
            } else {
                this.checkAllAnswersProvided().then(answered => {
                    if (answered) this.socket.emit("end-game", true);
                });

            }
        },
        async checkAllAnswersProvided() {
            let allAnswered = true;
            const users = await this.getUsers();
            users.forEach(user => {
                if (!user.answer) {
                    console.log(`${user.username} hasn't filled in their answer`);
                    allAnswered = false;
                }
            });
            return allAnswered;
        },
        checkCorrect() {
            if (this.player.answer?.correct) {
                this.player.score++;
            }
            this.player.answer = null;
        },
        clearLocalData() {
            localStorage.clear();
            this.gameOver = false;
            this.questionIndex = 0;
            this.player.score = 0;
            this.clickable = true;
            this.activeAnswerId = null;
        },
        resetData() {
            this.socket.emit('clear-data');
        },
        answerQuestion(answer) {
            if (this.clickable) {
                console.log(answer)
                this.player.answer = answer;
                this.activeAnswerId = answer.id;
                this.clickable = false;
                this.updateLocalStorage();
                this.socket.emit("answer-question", [this.currentUser.username, this.player.answer]);
            }
        },
        async getUsers() {
            try {
                const response = await axios.get("http://127.0.0.1:3000/users");
                return response.data;
            } catch (error) {
                console.error("There was an error fetching the users!", error);
                return [];
            }
        },
        getProgressPercentage() {
            return Math.round(((this.questionIndex + 1) / this.quiz.questions.length) * 100);
        }
    }
};
</script>

<style scoped>
.header {
    width: 90%;
}
.game-image {
    border: 1px solid white;
    width: 100%;
    height: 200px;
}
.game-index {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    font-weight: bold;
    box-sizing: border-box;
    border: 3px solid rgba(168, 14, 222, 1);
    border-radius: 50%;
}
.wrapper {
    width: 90%;
}
.game-answer {
    position: relative;
    background: transparent;
    border: 2px solid rgba(168, 14, 222, 1);
    color: white;
    margin: 10px 0;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer; /* Ensure buttons are clickable */
}
.game-answer h2 {
    margin: 0;
}
.answer-index {
    position: absolute;
    left: 20px;
}
.game-question {
    height: 100px;
}
.admin-group {
    width: 75%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
}
.admin-group button {
    width: 40%;
    border: rgba(168, 14, 222, 1) 2px solid;
    font-weight: bold;
    color: white;
    background: transparent;
    border-radius: 15px;
    padding: 5px;
}
.answer-grid button:hover {
    cursor: pointer;
}
.active-answer {
    border-color: rgb(255, 234, 0);
}
</style>
