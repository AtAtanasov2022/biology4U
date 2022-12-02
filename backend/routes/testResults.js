const express = require('express');
const router = express.Router();

const {
    createTestResult,
    getTestResultInfo,
    updateTestResultInfo,
    deleteTestResult,
    getAllTestResults
} = require('../controllers/testResults');

router.route('/').get(getAllTestResults).post(createTestResult);
router.route('/:id').get(getTestResultInfo).delete(deleteTestResult).put(updateTestResultInfo);

module.exports = router;