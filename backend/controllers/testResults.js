const TestResult = require('../models/TestResult');
const Topic = require('../models/Topic');
const User = require('../models/User');

const createTestResult = async (req, res) => {
    const {topicName, userId, score} = req.body;
    const topic = await Topic.findOne({
        where: {
            topicName: topicName
        }
    })

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
    console.log(req.params.topicName);
    const topic = await Topic.findOne({
        where: {
            topicName: req.params.topicName
        }
    })

    const testScores = await TestResult.findAll({
        where: {
            TopicId: topic.id
        },
        order: [
            ['score', 'DESC']
        ],
        include: {
            model: User
        }
    })
    
    const finalTestScores = testScores.slice(0, 5).map((element) => {
        return {
            score: element.score,
            user: element.User.username
        }
    });
    
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