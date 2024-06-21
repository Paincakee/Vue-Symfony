<template>
        <div>
            <h1 class="kahoot-title">{{ quiz.title }}</h1>
            <div class="game-field" v-if="!gameOver && quiz.questions && questionIndex < quiz.questions.length">
                <h2 class="kahoot-question">{{ quiz.questions[questionIndex].question }}</h2>
                <div class="answer-grid">
                    <button v-for="(answer, index) in quiz.questions[questionIndex].answers"
                         :key="answer.id"
                         :disabled="!clickable"
                         class="answer-field" :class="getAnswerClass(index)"
                         @click="answerQuestion(answer)"
                         >
                        {{ answer.answer }}
                    </button>
                </div>
            </div>
            <p v-else class="kahoot-message">No questions available</p>
            <div class="d-flex justify-content-between m-3">
                <h2>Score: {{ player.score }}</h2>
                <div>
                    <button @click="nextQuestion" v-if="player.admin" class="kahoot-button">Next Question</button>
                    <button @click="socket.emit('clear-data')" v-if="player.admin" class="kahoot-button">Reset Data</button>
                </div>
            </div>

        </div>
</template>

<script>
import {io} from "socket.io-client";
import axios from 'axios';

export default {
    props: {
        quiz: {
            type: Object,
            required: true
        },
        currentUser: {
            type: Object,
        }
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
        };
    },
    created(){
        this.socket = io('http://127.0.0.1:3000');

        this.socket.emit('storeUser',  this.currentUser.username );
        this.socket.on('joined',  (user) =>
            console.log(`user: ${user.username} joined`)
        );

        this.socket.on('next-question', index => {
            this.questionIndex = index;
            this.clickable = true
            this.checkCorrect()

            localStorage.setItem('questionIndex', index)
            localStorage.setItem('playerScore', this.player.score)
            localStorage.setItem('clickable', this.clickable)
        })

        this.socket.on('end-game', gameOver => {
            this.gameOver = gameOver
            this.checkCorrect()

            localStorage.setItem('gameOver', gameOver)
            localStorage.setItem('playerScore', this.player.score)
        })

        this.socket.on('clear-data', () => {
            this.clearLocalData()
        })
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
            if (role === 'ROLE_ADMIN') {
                this.player.admin = true;
            }
        })
    },
    methods: {
        async nextQuestion() {
            if (this.questionIndex < this.quiz.questions.length - 1 && null !== this.player.answer) {
                let answered = true
                await this.getUsers().then((users) => {
                    users.forEach((user) => {
                        if(!user.answer) {
                            console.log(`${user.username} hasnt filled in their answer`)
                            answered = false;
                        }
                    })
                })

                if(answered){
                    this.socket.emit('next-question', this.questionIndex)
                }
            }
            else {
                this.socket.emit('end-game', this.gameOver)
            }

        },
        checkCorrect() {
            if (this.player.answer.correct === true) {
                this.player.score++;
            }
            this.player.answer = null
        },
        clearLocalData() {
            localStorage.clear()
            this.gameOver = false;
            this.questionIndex = 0;
            this.player.score = 0;
            this.clickable = true;
        },
        answerQuestion(answer) {
            this.player.answer = answer
            console.log(this.player.answer.correct)
            this.clickable = false;
            localStorage.setItem('clickable', this.clickable)
            this.socket.emit('answer-question', [this.currentUser.username, this.player.answer])
        },
        getAnswerClass(index) {
            // Determine class based on index for Kahoot!-style colors
            switch (index % 4) {
                case 0:
                    return 'kahoot-answer-red';
                case 1:
                    return 'kahoot-answer-blue';
                case 2:
                    return 'kahoot-answer-yellow';
                case 3:
                    return 'kahoot-answer-green';
                default:
                    return ''; // Handle additional cases if needed
            }
        },
        async getUsers() {
            try {
                const response = await axios.get('http://127.0.0.1:3000/users');
                return response.data;
            } catch (error) {
                console.error('There was an error fetching the users!', error);
                return [];
            }
        }
    }
};
</script>

<style scoped>
.kahoot-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

.kahoot-question {
    font-size: 20px;
    margin-bottom: 15px;
}

.answer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.answer-field {
    padding: 15px;
    border: 2px solid #ccc;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease; /* Added color transition */
    font-weight: bold;
    color: white;
}

.kahoot-answer-red {
    background-color: #f44336;
}

.kahoot-answer-blue {
    background-color: #2196f3;
}

.kahoot-answer-yellow {
    background-color: #ffc107;
}

.kahoot-answer-green {
    background-color: #4caf50;
}

.kahoot-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.kahoot-button:hover {
    background-color: #45a049;
}

.kahoot-message {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .answer-grid {
        grid-template-columns: 1fr;
    }
}
</style>