const Comment = require("../models/Comment");

const createComment = async (req, res, next) => {
    try {
        console.log(req.body);
        const comment = await Comment.create(req.body);
        res.send(comment).status(201);
    } catch (err) {
        // console.log("Something is wrong");
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
        const comments = await Comment.findAll({ where: { SubTopicId: id } });
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