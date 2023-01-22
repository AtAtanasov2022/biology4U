const SubTopic = require("../models/SubTopic");

const createSubTopic = async (req, res) => {
  res.send("Created SubTopic");
};

const getSubTopicInfo = async (req, res) => {
  try {
    console.log("Retrieve subtopic");

    const id = req.query.id;

    const result = {
      topicTitle: "Testing",
      topicContent: `This is a test for suptopic ${id}`,
    };

    res.status(200).send(result);
  } catch (err) {
    next(err);
    console.log(err);
  }
};

const updateSubTopicInfo = async (req, res) => {
  res.send("SubTopic Updated");
};

const deleteSubTopic = async (req, res) => {
  res.send("SubTopic Deleted");
};

const getAllSubTopics = async (req, res) => {
  res.send("All SubTopics");
};

module.exports = {
  createSubTopic,
  getSubTopicInfo,
  updateSubTopicInfo,
  deleteSubTopic,
  getAllSubTopics,
};
