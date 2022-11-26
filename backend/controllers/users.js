const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    
    const user = await User.create({
      username: "John3",
      userPassword: "12345",
      email: "john3@elsys-bg.org",
      firstname: "John",
      lastname: "Karims",
      userType: "student",
    });
    console.log(user);
    res.send("User created").status(201);
  } catch (err) {
    // next(err);
    res.send(err);
  }
};

const getUserInfo = async (req, res) => {
  try {
    await User.findAll({
      where: {
        id: 1,
      },
    });
    res.send("User").status(200);
  } catch (err) {
    next(err);
  }
};

const updateUserInfo = async (req, res) => {
  try {
    await User.update(
      { lastName: Jephfree },
      {
        where: {
          lastName: "Doue",
        },
      }
    );
    res.send("Updated").status(200);
  } catch (err) {
    next(err);
  }
};

const deleteUserInfo = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: 2,
      },
    });
    res.send("Deleted").status(200);
  } catch (err) {
    next(err);
  }
};

const signInUserInfo = async (req, res) => {
  try {
    await User.findAll({
      where: {
        email: "joe@gmail.com",
      },
    });

    //Check user info here

    res.send("Signed In").status(200);
  } catch (err) {
    next(err);
  }
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
