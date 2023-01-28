const express = require('express');
const router = express.Router();

const {
    createComment,
    getCommentInfo,
    updateCommentInfo,
    deleteComment,
    getAllCommentsBySubTopic
} = require('../controllers/comments');

router.route('/').post(getAllCommentsBySubTopic).post(createComment);
router.route('/:id').get(getCommentInfo).delete(deleteComment).put(updateCommentInfo);

module.exports = router;