const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(
      req.body
    );
    res.send(user).status(201);
  } catch (err) {
    // next(err);
    res.send(err);
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.body.id,
      },
    });
    res.send(user).status(200);
  } catch (err) {
    res.send(err);
  }
};

const updateUserInfo = async (req, res) => {
  try {
    user = await User.update(
      req.body,
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.send(user).status(200);
  } catch (err) {
    res.send(err);
  }
};

const deleteUserInfo = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.send({destroyed: true}).status(200);
  } catch (err) {
    res.send(err);
  }
};

const logInUserInfo = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });

    //Check user info here

    res.send(user).status(200);
  } catch (err) {
    res.send(err);
    // next(err);
  }
};

const getAllUsersInfo = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users).status(200);
  } catch (err) {
    res.send(err);
    // next(err);
  }
};

module.exports = {
  createUser,
  getUserInfo,
  updateUserInfo,
  deleteUserInfo,
  logInUserInfo,
  getAllUsersInfo,
};
