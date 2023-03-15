const SubTopic = require("../models/SubTopic");

const createSubTopic = async (req, res) => {
  res.send("Created SubTopic");
};

const getSubTopicInfo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await SubTopic.findOne({where: {id: id}});

    res.status(200).send(result);
  } catch (err) {
    next(err);
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
    let subTopicsShortInfo = [];

    for (let index = 0; index < subTopics.length; index++) {
      const shortSubTopic = {
        id: subTopics[index].id,
        subTopicName: subTopics[index].subTopicName,
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
