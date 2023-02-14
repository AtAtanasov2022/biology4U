const SubTopic = require('../models/SubTopic');
const Topic = require('../models/Topic');

const createTopic = async (req, res) => {
    res.send("Created Topic");
}

const getTopicInfo = async (req, res) => {
    res.send("Topic Info");
}

const updateTopicInfo = async (req, res) => {
    res.send("Topic Updated");
}

const deleteTopic = async (req, res) => {
    res.send("Topic Deleted");
}

const getAllTopics = async (req, res, next) => {
    try {
        const topics = await Topic.findAll({include: {model: SubTopic}});
        res.send(topics).status(200);
      } catch (err) {
        next(err);
      }
}

module.exports = {
    createTopic,
    getTopicInfo,
    updateTopicInfo,
    deleteTopic,
    getAllTopics
}