const Comment = require("../models/Comment");

const createComment = async (req, res) => {
    res.send("Created Comment");
}

const getCommentInfo = async (req, res) => {
    res.send("Comment Info");
}

const updateCommentInfo = async (req, res) => {
    res.send("Comment Updated");
}

const deleteComment = async (req, res) => {
    res.send("Comment Deleted");
}

const getAllCommentsBySubTopic = async (req, res, next) => {
    try {
        const id = req.body.id;
        console.log(req.body);
        console.log("HERERERERERERERERERREREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        const comments = await Comment.findAll({ where: {SubTopicId: id}});
        res.send(comments).status(200);
      } catch (err) {
        next(err);
      }
}

module.exports = {
    createComment,
    getCommentInfo,
    updateCommentInfo,
    deleteComment,
    getAllCommentsBySubTopic
}