const Question = require("../models/Question");
const QuestionAnswer = require("../models/QuestionAnswer");
const SubTopic = require("../models/SubTopic");
const Topic = require("../models/Topic");
const { options } = require("../routes/questions");

const createQuestion = async (req, res) => {
    res.send("Created Question");
}

const getQuestionInfo = async (req, res) => {
    res.send("Question Info");
}

const updateQuestionInfo = async (req, res) => {
    res.send("Question Updated");
}

const deleteQuestion = async (req, res) => {
    res.send("Question Deleted");
}

const getAllQuestionsById = async (req, res) => {
    const questions = await Question.findAll({
        where: {
            SubTopicId: req.params.id,
        },
        include: {
            model: QuestionAnswer
        }
    });
    const finalQuestions = [];

    for (let index = 0; index < questions.length; index++) {
        let options = [];
        let answer = "";

        for (let index2 = 0; index2 < questions[index].QuestionAnswers.length; index2++) {
            if (questions[index].QuestionAnswers[index2].isCorrect) {
                answer = questions[index].QuestionAnswers[index2].answerContent;
            }
            options.push(questions[index].QuestionAnswers[index2].answerContent);
        }

        const element = {
            id: questions[index].id,
            question: questions[index].questionName,
            options: options,
            answer: answer
        };

        finalQuestions.push(element)
    }

    const shuffled = finalQuestions.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 5);

    res.status(200).send(selected);
}

const getAllQuestionsByTopic = async (req, res) => {
    if (req.params.topicName == 'undefined') {
        return;
    }

    const topic = await Topic.findOne({
        where: {
            topicName: req.params.topicName
        },
        include: {
            model: SubTopic
        }
    })

    let topicsQuestions = [];

    for (let i = 0; i < topic.SubTopics.length; i++) {
        const questions = await Question.findAll({
            where: {
                SubTopicId: topic.SubTopics[i].id,
            },
            include: {
                model: QuestionAnswer
            }
        });
        const finalQuestions = [];

        for (let index = 0; index < questions.length; index++) {
            let options = [];
            let answer = "";

            for (let index2 = 0; index2 < questions[index].QuestionAnswers.length; index2++) {
                if (questions[index].QuestionAnswers[index2].isCorrect) {
                    answer = questions[index].QuestionAnswers[index2].answerContent;
                }
                options.push(questions[index].QuestionAnswers[index2].answerContent);
            }

            const element = {
                id: questions[index].id,
                question: questions[index].questionName,
                options: options,
                answer: answer
            };

            finalQuestions.push(element)
        }
        topicsQuestions = topicsQuestions.concat(finalQuestions)
    }

    const shuffled = topicsQuestions.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 10);

    res.status(200).send(selected);
}

module.exports = {
    createQuestion,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestionsById,
    getAllQuestionsByTopic
}