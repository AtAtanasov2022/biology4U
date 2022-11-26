const express = require('express');
const router = express.Router();

const {
    createQuestion,
    getQuestionInfo,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestions
} = require('../controllers/topics');

router.route('/').get(getAllQuestions).post(createQuestion);
router.route('/:id').get(getQuestionInfo).delete(deleteQuestion).put(updateQuestionInfo);

module.exports = router;