const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ResultWithContext } = require("express-validator/src/chain");
const { generateAccessToken } = require("../middleware/generateAccessToken");
const jwt_decode = require("jwt-decode");

const createUser = async (req, res, next) => {
  try {
    if (req.body.username.length == 0 || req.body.username == null || req.body.userPassword.length == 0 || req.body.userPassword == null ||
      req.body.email.length == 0 || req.body.email == null || req.body.firstname.length == 0 || req.body.firstname == null ||
      req.body.lastname.length == 0 || req.body.lastname == null || req.body.userType.length == 0 || req.body.userType == null) {
      throw new Error("Invalid request body");
    } else {
      const userPassword = bcrypt.hashSync(req.body.userPassword, 10);
      const user = await User.create({...req.body,userPassword});
      const token = await generateAccessToken({ userId: user.id, username: user.username, userType: user.userType });
      const refreshToken = jwt.sign({ userId: user.id, username: user.username, userType: user.userType }, process.env.REFRESH_SECRET, { expiresIn: '7d' })
      res.status(201).send({ token: token, refreshToken: refreshToken });
    }
  } catch (err) {
    next(err);
  }
};

const logInUserInfo = async (req, res, next) => {
  try {
    if (req.body.username.length == 0 || req.body.username == null || req.body.userPassword.length == 0 || req.body.userPassword == null) {
      throw new Error("Invalid request body");
    } else {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!user) {
        return res.status(401).send('Unauthorized');
      }

      const resultComp = bcrypt.compareSync(req.body.userPassword, user.dataValues.userPassword)
      
      if (!resultComp) {
        return res.status(401).send('Unauthorized');
      }
      const token = await generateAccessToken({ userId: user.dataValues.id, username: user.dataValues.username, userType: user.dataValues.userType });
      const refreshToken = jwt.sign({ userId: user.dataValues.id, username: user.dataValues.username, userType: user.dataValues.userType }, process.env.REFRESH_SECRET, { expiresIn: '7d' })
      res.status(200).send({ token: token, refreshToken: refreshToken });
    }

  } catch (err) {
    next(err);
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const id = req.params.id;
      const user = await User.findOne({
        where: {
          id: id,
        },
      });
      res.send(user).status(200);
  } catch (err) {
    next(err);
  }
};

const updateUserInfo = async (req, res, next) => {
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

const deleteUserInfo = async (req, res, next) => {
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

const getAllUsersInfo = async (req, res, next) => {
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
