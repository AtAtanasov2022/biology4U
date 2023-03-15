const express = require('express');
const router = express.Router();

const {
    createQuestion,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestionsById,
    getAllQuestionsByTopic
} = require('../controllers/questions');

router.route('/').post(createQuestion);
router.route('/:id').get(getAllQuestionsById).delete(deleteQuestion).put(updateQuestionInfo);
router.route('/topics/:topicName').get(getAllQuestionsByTopic);
module.exports = router;