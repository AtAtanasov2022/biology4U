const express = require('express');
const router = express.Router();

const {
    createTestResult,
    getTestResultInfo,
    updateTestResultInfo,
    deleteTestResult,
    getAllTestResults,
    getAllTestResultsByTopic
} = require('../controllers/testResults');

router.route('/').get(getAllTestResults).post(createTestResult);
router.route('/:id').get(getTestResultInfo).delete(deleteTestResult).put(updateTestResultInfo);
router.route('/topic/:topicName').get(getAllTestResultsByTopic)

module.exports = router;