const TestResult = require('../models/TestResult');
const Topic = require('../models/Topic');
const User = require('../models/User');

const createTestResult = async (req, res) => {
    const {topicName, userId, score} = req.body;
    console.log(topicName);
    console.log(userId);
    const topic = await Topic.findOne({
        where: {
            topicName: topicName
        }
    })
    console.log(topic);

    const testResult = await TestResult.create({
        score: score,
        UserId: userId,
        TopicId: topic.id
    })
    res.send(testResult);
}

const getTestResultInfo = async (req, res) => {
    res.send("TestResult Info");
}

const updateTestResultInfo = async (req, res) => {
    res.send("TestResult Updated");
}

const deleteTestResult = async (req, res) => {
    res.send("TestResult Deleted");
}

const getAllTestResults = async (req, res) => {
    res.send("All TestResults");
}

const getAllTestResultsByTopic = async (req, res) => {
    const topic = await Topic.findOne({
        where: {
            topicName: req.params.topicName
        }
    })

    const testScores = await TestResult.findAll({
        where: {
            TopicId: topic.id
        },
        include: {
            model: User
        }
    })
    // console.log(testScores);
    let sortedScores = testScores.slice().sort((a, b) => b.score - a.score);

    let finalTestScores = [];
    for (let index = 0; index < 5; index++) {
        const testScore = {
            score: sortedScores[index].score,
            user: sortedScores[index].User.username
        }
        finalTestScores.push(testScore);
    }
    console.log(finalTestScores);
    res.send(finalTestScores);
}

module.exports = {
    createTestResult,
    getTestResultInfo,
    updateTestResultInfo,
    deleteTestResult,
    getAllTestResults,
    getAllTestResultsByTopic
}