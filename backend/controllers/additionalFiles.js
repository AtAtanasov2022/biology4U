const AdditionalFile = require("../models/AdditionalFile");

const createAdditionalFile = async (req, res) => {
    res.send("Created AdditionalFile");
}

const getAdditionalFileInfo = async (req, res) => {
    res.send("AdditionalFile Info");
}

const updateAdditionalFileInfo = async (req, res) => {
    res.send("AdditionalFile Updated");
}

const deleteAdditionalFile = async (req, res) => {
    res.send("AdditionalFile Deleted");
}

const getAllAdditionalFiles = async (req, res) => {
    res.send("All AdditionalFiles");
}

module.exports = {
    createAdditionalFile,
    getAdditionalFileInfo,
    updateAdditionalFileInfo,
    deleteAdditionalFile,
    getAllAdditionalFiles
}