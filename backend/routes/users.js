const express = require('express');
const router = express.Router();

const {
    createUser,
    getUserInfo,
    updateUserInfo,
    deleteUserInfo,
    signInUserInfo,
    getAllUsersInfo
} = require('../controllers/users');

router.route('/').get(getAllUsersInfo).post(createUser);
router.route('/signIn').get(signInUserInfo);
router.route('/:id').get(getUserInfo).delete(deleteUserInfo).put(updateUserInfo);

module.exports = router;