const express = require('express');
const router = express.Router();

const {
    createUser,
    getUserInfo,
    updateUserInfo,
    deleteUserInfo,
    signInUserInfo,
    logoutUser
} = require('../controllers/users')

router.route('/')