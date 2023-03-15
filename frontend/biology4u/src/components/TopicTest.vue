<template>
    <div class="mainPage" v-if="currentQuestion">
        <div class="topicBox">
            <va-data-table v-if="table" :items="scores" />
            <div v-if="!started" class="startQuiz">
                <button @click="startTest">Започни теста</button>
            </div>
            <div v-else class="quiz">

                <div v-if="!finished">
                    <h2>{{ currentQuestion.question || "NONE" }}</h2>
                    <ul>
                        <li v-for="(option, index) in currentQuestion.options" :key="index">
                            <label style="width: 1rem">
                                <input type="radio" :name="currentQuestion.id" :value="option" v-model="selectedOption">
                                {{ option }}
                            </label>
                        </li>
                    </ul>
                    <div id="buttonsContainer">
                        <button @click="prevQuestion">Предишен</button>
                        <button @click="checkAnswer">{{ buttonText }}</button>
                    </div>
                </div>
                <div v-else>
                    <h2>Резултати от теста</h2>
                    <p>Имаш {{ score }} верни въпроса от {{ questions.length }}.</p>
                    <p>Време: {{ timeTaken }} секунди.</p>
                    <p>Точки: {{ Math.ceil(finalScore) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TestService from "@/services/testResult.service";
import QuestionService from "../services/question.service";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            questions: [],
            scores: [],
            userAnswers: [],
            selectedOptions: [],
            currentQuestionIndex: 0,
            selectedOption: null,
            score: 0,
            startTime: null,
            endTime: null,
            maxTime: null,
            finished: false,
            started: false,
            table: true
        };
    },
    computed: {
        ...mapGetters({
            user: "getUserInfo",
        }),
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        },
        buttonText() {
            return this.currentQuestionIndex === this.questions.length - 1 ? "Предай" : "Следващ";
        },
        timeTaken() {
            if (!this.startTime && !this.endTime) {
                return 0;
            }
            const timeDiff = this.endTime - this.startTime;
            const seconds = Math.round(timeDiff / 1000);
            return seconds;
        },
    },

    created() {
        this.$watch(
            () => this.$route.params.title,
            () => {
                this.questions = [];
                this.currentQuestionIndex = 0;
                this.selectedOption = null;
                this.score = 0;
                this.finalScore = 0;
                this.startTime = null;
                this.endTime = null;
                this.finished = false;
                this.started = false;
                this.table = true;
                this.getQuestions(this.$route.params.title);
            },
            { immediate: true }
        )
    },

    mounted() {
        this.getScores(this.$route.params.title)
    },

    methods: {
        getQuestions(topicTitle) {
            return QuestionService.getAllQuestionsByTopic(topicTitle).then((response) => {
                this.questions = response;
                for (let index = 0; index < this.questions.length; index++) {
                    this.userAnswers.push(false);
                    this.selectedOptions.push(null);
                }
            }).catch((err) => { console.log(err); });
        },
        getScores(topicTitle) {
            return TestService.getAllTestResultsByTopic(topicTitle).then((response) => {
                this.scores = response;
            }).catch((err) => {
                console.log(err);
            })
        },
        startTest() {
            this.startTime = new Date();
            this.maxTime = (this.startTime / 1000) + (this.questions.length * 60);
            this.started = true;
            this.table = false;
        },
        checkAnswer() {
            this.selectedOptions[this.currentQuestionIndex] = this.selectedOption;
            if (this.selectedOption === this.currentQuestion.answer) {
                this.userAnswers[this.currentQuestionIndex] = true;
            } else {
                this.userAnswers[this.currentQuestionIndex] = false;
            }
            if (this.currentQuestionIndex === this.questions.length - 1) {
                let isValid = this.selectedOptions.some(element => element == null);

                if (!isValid) {
                    this.finished = true;
                    this.table = true;
                    this.endTime = new Date();
                    for (let index = 0; index < this.userAnswers.length; index++) {
                        if (this.userAnswers[index] == true) {
                            this.score++;
                        }
                    }
                    this.finalScore = (this.score / this.questions.length) * (1 - (((this.endTime - this.startTime) / 1000)) / (this.maxTime - this.startTime / 1000)) * 100;
                    TestService.addTestResult(this.$route.params.title, this.user.userId, Math.ceil(this.finalScore)).then(() => {
                        this.getScores(this.$route.params.title);
                    })
                } else {
                    alert("Попълнете всички въпроси и опитайте отново!");
                }
            } else {
                this.currentQuestionIndex++;
            }
            this.selectedOption = this.selectedOptions[this.currentQuestionIndex];
        },
        prevQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--;
                this.selectedOption = this.selectedOptions[this.currentQuestionIndex];
            }
        }
    },
};
</script>

<style scoped>
input[type='radio'] {
    transform: scale(1.5);
    margin-right: 0.5rem;
}

.startQuiz {
    padding: 1rem;
    background-color: #D8F3DC;
    border-radius: 1.5rem;
    width: 45%;
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quiz {
    padding: 2rem;
    background-color: #D8F3DC;
    border-radius: 1.5rem;
    width: 75%;
    height: fit-content;
    font-size: large;
}

ul {
    list-style: none;
}

li {
    margin-bottom: 1rem;
}

h2 {
    margin-bottom: 1rem;
}

#buttonsContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
}

button {
    color: white;
    background-color: #40916c;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.mainPage {
    display: flex;
    flex-direction: row;
    margin-left: 30%;
    font-size: large;
}

.topicBox {
    width: 100%;
    min-height: 45rem;
    padding: 4rem;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
}
</style>