const TestResult = require('../models/TestResult');

const createTestResult = async (req, res) => {
    res.send("Created TestResult");
}

const getTestResultInfo = async (req, res) => {
    res.send("TestResult Info");
}

const updateTestResultInfo = async (req, res) => {
    res.send("TestResult Updated");
}

const deleteTestResult = async (req, res) => {
    res.send("TestResult Deleted");
}

const getAllTestResults = async (req, res) => {
    res.send("All TestResults");
}

module.exports = {
    createTestResult,
    getTestResultInfo,
    updateTestResultInfo,
    deleteTestResult,
    getAllTestResults
}