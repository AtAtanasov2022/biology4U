const express = require('express');
const router = express.Router();

const {
    createTopic,
    getTopicInfo,
    updateTopicInfo,
    deleteTopic,
    getAllTopics
} = require('../controllers/topics');

router.route('/').get(getAllTopics).post(createTopic);
router.route('/:id').get(getTopicInfo).delete(deleteTopic).put(updateTopicInfo);

module.exports = router;