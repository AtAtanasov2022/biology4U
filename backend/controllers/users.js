const User = require("../models/User");

const createUser = (req, res) => {
    res.send("User created").status(201);
}

const getUserInfo = (req, res) => {
    res.send("User").status(200);
}

const updateUserInfo = (req, res) => {
    res.send("Updated").status(200);
}

const deleteUserInfo = (req, res) => {
    res.send("Deleted").status(200);
}

const signInUserInfo = (req, res) => {
    res.send("Signed In").status(200);
}

const getAllUsersInfo = (req, res) => {
    res.send("AllUsers").status(200);
}

module.exports = {
    createUser,
    getUserInfo,
    updateUserInfo,
    deleteUserInfo,
    signInUserInfo,
    getAllUsersInfo
}
