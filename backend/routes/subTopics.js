const express = require('express');
const router = express.Router();

const {
    createSubTopic,
    getSubTopicInfo,
    updateSubTopicInfo,
    deleteSubTopic,
    getAllSubTopics
} = require('../controllers/subtopics');

router.route('/').get(getAllSubTopics).post(createSubTopic);
router.route('/:id').get(getSubTopicInfo).delete(deleteSubTopic).put(updateSubTopicInfo);

module.exports = router;