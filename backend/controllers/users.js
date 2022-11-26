const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    await User.create({ ...req.body });
    res.send("User created").status(201);

  } catch (err) {
    next(err);
  }
};
const getUserInfo = async (req, res) => {
    try {
        await User.findAll({where: {
            id: 1
        }});
        res.send("User").status(200);
    
      } catch (err) {
        next(err);
      } 
};

const updateUserInfo = (req, res) => {
  res.send("Updated").status(200);
};

const deleteUserInfo = (req, res) => {
  res.send("Deleted").status(200);
};

const signInUserInfo = (req, res) => {
  res.send("Signed In").status(200);
};

const getAllUsersInfo = async (req, res) => {
  try {
    await User.findAll();
    res.send("AllUsers").status(200);

  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserInfo,
  updateUserInfo,
  deleteUserInfo,
  signInUserInfo,
  getAllUsersInfo,
};
