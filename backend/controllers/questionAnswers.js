const QuestionAnswer = require("../models/QuestionAnswer");

const createQuestionAnswer = async (req, res) => {
    res.send("Created QuestionAnswer");
}

const getQuestionAnswerInfo = async (req, res) => {
    res.send("QuestionAnswer Info");
}

const updateQuestionAnswerInfo = async (req, res) => {
    res.send("QuestionAnswer Updated");
}

const deleteQuestionAnswer = async (req, res) => {
    res.send("QuestionAnswer Deleted");
}

const getAllQuestionAnswers = async (req, res) => {
    res.send("All QuestionAnswers");
}

module.exports = {
    createQuestionAnswer,
    getQuestionAnswerInfo,
    updateQuestionAnswerInfo,
    deleteQuestionAnswer,
    getAllQuestionAnswers
}