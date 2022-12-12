const express = require('express');
const router = express.Router();

const {
    createUser,
    getUserInfo,
    updateUserInfo,
    deleteUserInfo,
    logInUserInfo,
    getAllUsersInfo
} = require('../controllers/users');

router.route('/').get(getAllUsersInfo).post(createUser);
router.route('/logIn').get(logInUserInfo);
router.route('/:id').get(getUserInfo).delete(deleteUserInfo).put(updateUserInfo);

module.exports = router;