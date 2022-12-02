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

const getAllComments = async (req, res) => {
    res.send("All Comments");
}

module.exports = {
    createComment,
    getCommentInfo,
    updateCommentInfo,
    deleteComment,
    getAllComments
}