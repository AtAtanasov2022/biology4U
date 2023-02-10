const express = require('express');
const router = express.Router();

const {
    createAdditionalFile,
    getAdditionalFileInfo,
    updateAdditionalFileInfo,
    deleteAdditionalFile,
    getAllAdditionalFiles,
    downloadFile,
    upload,
} = require('../controllers/additionalFiles');
const cors = require('cors');

router.route('/:subTopicId').get(getAllAdditionalFiles);
router.route('/:userId/:subTopicId').post(upload.single('asd'), createAdditionalFile);
router.route('/:id').delete(deleteAdditionalFile);
router.route('/download/:fileId/').get(cors({
    exposedHeaders: ['Content-Disposition'],
}), downloadFile);

module.exports = router;