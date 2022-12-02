const express = require('express');
const router = express.Router();

const {
    createAdditionalFile,
    getAdditionalFileInfo,
    updateAdditionalFileInfo,
    deleteAdditionalFile,
    getAllAdditionalFiles
} = require('../controllers/additionalFiles');

router.route('/').get(getAllAdditionalFiles).post(createAdditionalFile);
router.route('/:id').get(getAdditionalFileInfo).delete(deleteAdditionalFile).put(updateAdditionalFileInfo);

module.exports = router;