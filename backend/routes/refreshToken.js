const express = require('express');
const router = express.Router();

const {
    refreshToken,
} = require('../controllers/refreshTokens');

router.route('/refresh').post(refreshToken);

module.exports = router;