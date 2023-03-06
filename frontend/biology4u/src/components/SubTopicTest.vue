<template>
    <div class="mainPage" v-if="currentQuestion">
        <div class="topicBox">
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
                    <p>Имаш {{ score }} точки от максимум {{ questions.length }}.</p>
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
            selectedOptions: [],
            userAnswers: [],
            score: 0,
            startTime: null,
            endTime: null,
            finished: false,
            started: false
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
            () => this.$route.params.id,
            () => {
                this.questions = [];
                this.currentQuestionIndex = 0;
                this.selectedOption = null;
                this.selectedOptions = [];
                this.score = 0;
                this.startTime = null;
                this.endTime = null;
                this.finished = false;
                this.started = false;
                this.userAnswers = [];
                this.getQuestions(this.$route.params.id);
            },
            { immediate: true }
        )
    },

    beforeMount() {
        // this.getQuestions(this.$route.params.id)
    },

    methods: {
        getQuestions(subTopicId) {
            return QuestionService.getAllQuestionsById(subTopicId).then((response) => {
                console.log(response);
                this.questions = response;
                this.questions.forEach(() => {
                    this.userAnswers.push(false);
                    this.selectedOptions.push(null);
                });
            }).catch((err) => { console.log(err); });
        },
        startTest() {
            this.startTime = new Date();
            this.started = true;
        },
        checkAnswer() {
            this.selectedOptions[this.currentQuestionIndex] = this.selectedOption;
            if (this.selectedOption === this.currentQuestion.answer) {
                this.userAnswers[this.currentQuestionIndex] = true;
            } else {
                this.userAnswers[this.currentQuestionIndex] = false;
            }
            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.selectedOptions.forEach(element => {
                    if (element == null) {
                        alert("Попълнете всички въпроси и опитайте отново!");
                        return;
                    }
                });
                // for (let index = 0; index < this.selectedOptions.length; index++) {
                //     if (this.selectedOptions[index] == null) {
                //         alert("Попълнете всички въпроси и опитайте отново!");
                //         return;
                //     }
                // }
                this.finished = true;
                this.endTime = new Date();
                for (let index = 0; index < this.userAnswers.length; index++) {
                    if (this.userAnswers[index] == true) {
                        this.score++;
                    }
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
    width: 75%;
    height: 20rem;
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
    justify-content: center;
}
</style>