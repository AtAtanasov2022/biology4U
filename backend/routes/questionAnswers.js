const express = require('express');
const router = express.Router();

const {
    createQuestionAnswer,
    getQuestionAnswerInfo,
    updateQuestionAnswerInfo,
    deleteQuestionAnswer,
    getAllQuestionAnswers
} = require('../controllers/questionAnswers');

router.route('/').get(getAllQuestionAnswers).post(createQuestionAnswer);
router.route('/:id').get(getQuestionAnswerInfo).delete(deleteQuestionAnswer).put(updateQuestionAnswerInfo);

module.exports = router;