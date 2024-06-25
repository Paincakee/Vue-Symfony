<template>
    <div class="game-container d-flex align-items-center flex-column">
        <div class="header mt-4">
            <div class="title-wrapper d-flex justify-content-between">
                <h1 class="m-0 fs-3">{{quiz.title}}</h1>
                <h1 class="m-0 fs-3">{{questionIndex + 1}} of {{ quiz.questions.length }}</h1>
            </div>
            <div class="progress mt-1" >
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
        <div v-if="!gameOver && quiz.questions && questionIndex < quiz.questions.length" class="mt-2">
            <div class="game-question d-flex align-items-center">
                <div class="game-index d-flex align-items-center justify-content-center me-2">
                    <span class="fs-2">{{questionIndex + 1}}</span>
                </div>
                <h2 class="m-0">{{ quiz.questions[questionIndex].question }}</h2>
            </div>
            <div class="answer-grid d-flex flex-column">
                <button
                    v-for="(answer, index) in quiz.questions[questionIndex].answers"
                    :key="answer.id"
                    :disabled="!clickable"
                    class="game-answer"
                    :class="getAnswerClass(index)"
                    @click="answerQuestion(answer)"
                >
                    
                    {{ String.fromCharCode(65 + index) }} {{ answer.answer }}
                </button>
            </div>
<!--        </div>-->
<!--        <p v-else class="kahoot-message">No questions available</p>-->
<!--        <div class="score-controls">-->
<!--            <h2>Score: {{ player.score }}</h2>-->
<!--            <div>-->
<!--                <button @click="nextQuestion" v-if="player.admin" class="kahoot-button">Next Question</button>-->
<!--                <button @click="socket.emit('clear-data')" v-if="player.admin" class="kahoot-button">Reset Data</button>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import { io } from "socket.io-client";
import axios from "axios";
import encoreImage from '../../images/encore.jpg'

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
            image: encoreImage
        };
    },
    created() {
        this.socket = io("http://127.0.0.1:3000");

        this.socket.emit("storeUser", this.currentUser.username);
        this.socket.on("joined", (user) => console.log(`user: ${user.username} joined`));

        this.socket.on("next-question", (index) => {
            this.questionIndex = index;
            this.clickable = true;
            this.checkCorrect();

            localStorage.setItem("questionIndex", index);
            localStorage.setItem("playerScore", this.player.score);
            localStorage.setItem("clickable", this.clickable);
        });

        this.socket.on("end-game", (gameOver) => {
            this.gameOver = gameOver;
            this.checkCorrect();

            localStorage.setItem("gameOver", gameOver);
            localStorage.setItem("playerScore", this.player.score);
        });

        this.socket.on("clear-data", () => {
            this.clearLocalData();
        });
    },
    mounted() {
        // Load from localStorage on component mount
        const storedQuestionIndex = localStorage.getItem("questionIndex");
        const storedGameOver = localStorage.getItem("gameOver");
        const storedScore = localStorage.getItem("playerScore");
        const storedClickable = localStorage.getItem("clickable");

        if (storedQuestionIndex !== null) {
            this.questionIndex = parseInt(storedQuestionIndex);
        }

        if (storedGameOver !== null) {
            this.gameOver = JSON.parse(storedGameOver);
        }

        if (storedScore !== null) {
            this.player.score = parseInt(storedScore);
        }

        if (storedClickable !== null) {
            this.clickable = JSON.parse(storedClickable);
        }

        this.currentUser.roles.forEach((role) => {
            if (role === "ROLE_ADMIN") {
                this.player.admin = true;
            }
        });
    },
    methods: {
        async nextQuestion() {
            if (this.questionIndex < this.quiz.questions.length - 1 && this.player.answer !== null) {
                let answered = true;
                await this.getUsers().then((users) => {
                    users.forEach((user) => {
                        if (!user.answer) {
                            console.log(`${user.username} hasnt filled in their answer`);
                            answered = false;
                        }
                    });
                });

                if (answered) {
                    this.socket.emit("next-question", this.questionIndex);
                }
            } else {
                this.socket.emit("end-game", this.gameOver);
            }
        },
        checkCorrect() {
            if (this.player.answer.correct === true) {
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
        },
        answerQuestion(answer) {
            this.player.answer = answer;
            console.log(this.player.answer.correct);
            this.clickable = false;
            localStorage.setItem("clickable", this.clickable);
            this.socket.emit("answer-question", [this.currentUser.username, this.player.answer]);
        },
        getAnswerClass(index) {
            // Determine class based on index for Kahoot!-style colors
            switch (index % 4) {
                case 0:
                    return "kahoot-answer-red";
                case 1:
                    return "kahoot-answer-blue";
                case 2:
                    return "kahoot-answer-yellow";
                case 3:
                    return "kahoot-answer-green";
                default:
                    return ""; // Handle additional cases if needed
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
            return Math.round((this.questionIndex+1 / this.quiz.questions.length) * 100);

        }
    },
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
    width: 40px;
    height: 40px;
    font-weight: bold;
    position: relative;
    box-sizing: border-box;
    border: 3px solid rgba(168, 14, 222, 1);
    border-radius: 50%;
}
</style>
