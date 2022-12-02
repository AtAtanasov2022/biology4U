const SubTopic = require("../models/SubTopic");

const createSubTopic = async (req, res) => {
        res.send("Created SubTopic");
    }

const getSubTopicInfo = async (req, res) => {
    res.send("SubTopic Info");
}

const updateSubTopicInfo = async (req, res) => {
    res.send("SubTopic Updated");
}

const deleteSubTopic = async (req, res) => {
    res.send("SubTopic Deleted");
}

const getAllSubTopics = async (req, res) => {
    res.send("All SubTopics");
}

module.exports = {
    createSubTopic,
    getSubTopicInfo,
    updateSubTopicInfo,
    deleteSubTopic,
    getAllSubTopics
}