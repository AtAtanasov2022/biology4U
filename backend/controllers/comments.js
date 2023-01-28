const Comment = require("../models/Comment");

const createComment = async (req, res) => {
    res.send("Created Comment");
}

const updateCommentInfo = async (req, res) => {
    res.send("Comment Updated");
}

const deleteComment = async (req, res) => {
    res.send("Comment Deleted");
}

const getAllCommentsBySubTopic = async (req, res, next) => {
    try {
        const id = req.params.id;
        const comments = await Comment.findAll({ where: {SubTopicId: id}});
        res.send(comments).status(200);
      } catch (err) {
        next(err);
      }
}

module.exports = {
    createComment,
    updateCommentInfo,
    deleteComment,
    getAllCommentsBySubTopic
}