const Question = require("../models/Question");

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

const getAllQuestions = async (req, res) => {
    res.send("All Questions");
}

module.exports = {
    createQuestion,
    getQuestionInfo,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestions
}