const express = require('express');
const router = express.Router();

const {
    createComment,
    getCommentInfo,
    updateCommentInfo,
    deleteComment,
    getAllComments
} = require('../controllers/topics');

router.route('/').get(getAllComments).post(createComment);
router.route('/:id').get(getCommentInfo).delete(deleteComment).put(updateCommentInfo);

module.exports = router;