<template>
    <div class="mainPage" v-if="currentQuestion">
        <div class="topicBox">
            <div class="quiz">
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
                    <button @click="checkAnswer">{{ buttonText }}</button>
                </div>
                <div v-else>
                    <h2>Резултати от теста</h2>
                    <p>Имаш {{ score }} верни въпроса от {{ questions.length }}.</p>
                    <p>Време: {{ timeTaken }} секунди.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionService from "../services/question.service"
export default {
    data() {
        return {
            questions: [],
            currentQuestionIndex: 0,
            selectedOption: null,
            score: 0,
            startTime: null,
            endTime: null,
            maxTime: null,
            finished: false
        };
    },
    computed: {
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
                this.getQuestions(this.$route.params.title);
            },
            { immediate: true }
        )
    },

    beforeMount() {
        this.getQuestions(this.$route.params.title)
    },

    methods: {
        getQuestions(topicTitle) {
            return QuestionService.getAllQuestionsByTopic(topicTitle).then((response) => {
                console.log(response);
                this.questions = response;
            }).catch((err) => { console.log("THROWING ERROR"); console.log(err); });
        },
        checkAnswer() {
            if (this.currentQuestionIndex === 0) {
                this.startTime = new Date();
                this.maxTime = (this.startTime / 1000) + (this.questions.length * 60);
                console.log(this.startTime / 1000); // start seconds
                console.log(this.maxTime); // maxEnd seconds
                console.log((this.maxTime - this.startTime/1000)); //max seconds to work
            } // Add start button and remove this if statement 
            if (this.selectedOption === this.currentQuestion.answer) {
                this.score++;
            }
            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.finished = true;
                this.endTime = new Date();
                this.finalScore = (this.score/this.questions.length)*(1-(((this.endTime-this.startTime)/1000))/(this.maxTime - this.startTime/1000))*100;
                console.log(Math.ceil(this.finalScore));
            } else {
                this.currentQuestionIndex++;
            }
            this.selectedOption = null;
        },
    },
};
</script>

<style scoped>
.quiz {
    padding: 1rem;
    background-color: #D8F3DC;
    border-radius: 1.5rem;
    width: 45%;
    height: fit-content;
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
}

.topicBox {
    width: 100%;
    min-height: 45rem;
    padding: 4rem;
    background-color: white;
    display: flex;
    justify-content: center;
}
</style>