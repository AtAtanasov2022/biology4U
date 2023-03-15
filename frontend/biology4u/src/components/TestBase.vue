<script>
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
        }
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

    methods: {
        calculateFinalScore() {

        },
        setDefaultValues(questionsRequest) {
            return questionsRequest.then((response) => {
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
                let isValid = this.selectedOptions.some(element => element == null);

                if (!isValid) {
                    this.finished = true;
                    this.endTime = new Date();
                    for (let index = 0; index < this.userAnswers.length; index++) {
                        if (this.userAnswers[index] == true) {
                            this.score++;
                        }
                    }
                } else {
                    alert("Попълнете всички въпроси и опитайте отново!");
                }
                this.calculateFinalScore();
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
    }
}
</script>

<style scoped>

</style>