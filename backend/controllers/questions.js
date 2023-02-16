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

    res.status(200).send(finalQuestions);
}

const getAllQuestionsByTopic = async (req, res) => {
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


    res.status(200).send(topicsQuestions);
}

module.exports = {
    createQuestion,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestionsById,
    getAllQuestionsByTopic
}