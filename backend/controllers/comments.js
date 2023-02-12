const Comment = require("../models/Comment");
const User = require("../models/User");

const createComment = async (req, res, next) => {
    try {
        const comment = await Comment.create(req.body);
        res.send(comment).status(201);
    } catch (err) {
        next(err);
    }
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
        const comments = await Comment.findAll({ where: { SubTopicId: id }, include: {model: User} });
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