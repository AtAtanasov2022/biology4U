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
    
    const finalQuestions = transformQuestions(questions);

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
        const finalQuestions = transformQuestions(questions);
        topicsQuestions = topicsQuestions.concat(finalQuestions)
    }

    const shuffled = topicsQuestions.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 10);

    res.status(200).send(selected);
}

const transformQuestions = (questions) => {
    return questions.map((question) => {
        let options = [];
        let answer = "";

        question.QuestionAnswers.forEach(element => {
            if (element.isCorrect) {
                answer = element.answerContent;
            }
            options.push(element.answerContent);
        });

        return {
            id: question.id,
            question: question.questionName,
            options: options,
            answer: answer
        };
    });
} 

module.exports = {
    createQuestion,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestionsById,
    getAllQuestionsByTopic
}