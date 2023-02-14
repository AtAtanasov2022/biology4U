const express = require('express');
const router = express.Router();

const {
    createComment,
    updateCommentInfo,
    deleteComment,
    getAllCommentsBySubTopic
} = require('../controllers/comments');

router.route('/').post(createComment);
router.route('/:id').get(getAllCommentsBySubTopic).delete(deleteComment).put(updateCommentInfo);

module.exports = router;