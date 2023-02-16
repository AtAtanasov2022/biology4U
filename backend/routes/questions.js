const express = require('express');
const router = express.Router();

const {
    createQuestion,
    updateQuestionInfo,
    deleteQuestion,
    getAllQuestionsById
} = require('../controllers/questions');

router.route('/').post(createQuestion);
router.route('/:id').get(getAllQuestionsById).delete(deleteQuestion).put(updateQuestionInfo);

module.exports = router;