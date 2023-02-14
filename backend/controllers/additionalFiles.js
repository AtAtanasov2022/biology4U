const AdditionalFile = require("../models/AdditionalFile");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const User = require("../models/User");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, `${uuidv4()}${file.originalname}`);
    }
});
const upload = multer({ storage });

const createAdditionalFile = async (req, res) => {
    const file = await AdditionalFile.create({
        pathName: req.file.filename,
        fileName: req.file.originalname,
        UserId: req.params.userId,
        SubTopicId: req.params.subTopicId
    });
    res.json({id: file.id, fileName: file.fileName});
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
    const files = await AdditionalFile.findAll({
        where: {
            SubTopicId: req.params.subTopicId,
        },
        include: {model: User}
    });
    const response = files.map((file) => {
        return {
            id: file.id,
            fileName: file.fileName,
            username: file.User.username
        }
    })
    res.send(response);
}

const downloadFile = async (req, res) => {
    const file = await AdditionalFile.findOne({
        where: {
            id: req.params.fileId,
        },
    });
    
    try {
        const fileName = file.fileName;
        const fileURL =  `${__dirname}/uploads/${file.pathName}`;
        const stream = fs.createReadStream(fileURL);
        const contentType = mime.getType(fileName);
        
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`)
        stream.pipe(res);
        // res.status(200).send({fileName: file.fileName, fileId: file.id});
      } catch (e) {
        console.error(e)
        res.status(500).end();
      }

    // res.download(path.join(__dirname, file.pathName), file.fileName);
}

module.exports = {
    createAdditionalFile,
    getAdditionalFileInfo,
    updateAdditionalFileInfo,
    deleteAdditionalFile,
    getAllAdditionalFiles,
    downloadFile,
    upload,
}