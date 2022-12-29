const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ResultWithContext } = require("express-validator/src/chain");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.username.length == 0 || req.body.username == null || req.body.userPassword.length == 0 || req.body.userPassword == null ||
      req.body.email.length == 0 || req.body.email == null || req.body.firstname.length == 0 || req.body.firstname == null ||
      req.body.lastname.length == 0 || req.body.lastname == null || req.body.userType.length == 0 || req.body.userType == null) {
      throw new Error("Invalid request body");
    } else {
      const user = await User.create(
        req.body
      );
      const token = generateAccessToken({ userId: user.id, username: user.username, userType: user.userType });

      res.status(201).send(token);
    }
  } catch (err) {
    next(err);
  }
};

const logInUserInfo = async (req, res) => {
  try {
    if (req.body.username.length == 0 || req.body.username == null || req.body.userPassword.length == 0 || req.body.userPassword == null) {
      throw new Error("Invalid request body");
    } else {
      const user = await User.findAll({
        where: {
          username: req.body.username,
          password: req.body.password,
        },
      });

      const token = generateAccessToken({ userId: user.id, username: user.username, userType: user.userType });

      res.status(200).send(token);
    }

  } catch (err) {
    next(err);
  }
};

const getUserInfo = async (req, res) => {
  try {
    //Token maybe?
    if (req.body.id == null) {
      throw new Error("Invalid request body");
    } else {
      const user = await User.findAll({
        where: {
          id: req.body.id,
        },
      });
      res.send(user).status(200);
    }
  } catch (err) {
    next(err);
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
    next(err);
  }
};

const deleteUserInfo = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.send({ destroyed: true }).status(200);
  } catch (err) {
    next(err);
  }
};

const getAllUsersInfo = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users).status(200);
  } catch (err) {
    next(err);
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
