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

const getAllSubTopics = async (req, res, next) => {
  try {
    const subTopics = await SubTopic.findAll();
    console.log(subTopics);
    let subTopicsShortInfo = [];

    for (let index = 0; index < subTopics.length; index++) {
      const shortSubTopic = {
        id: subTopics[index].id,
        subTopicName: subTopics[index].sub_topic_name,
        topicId: subTopics[index].TopicId
      };
      subTopicsShortInfo.push(shortSubTopic);
    }

    res.send(subTopicsShortInfo).status(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSubTopic,
  getSubTopicInfo,
  updateSubTopicInfo,
  deleteSubTopic,
  getAllSubTopics,
};
