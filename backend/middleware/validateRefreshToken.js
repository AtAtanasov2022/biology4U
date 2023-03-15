const jwt = require("jsonwebtoken");
const { generateAccessToken ,generateRefreshToken } = require("../middleware/generateAccessToken");

const validateRefreshToken = async (req, res, next) => {
    try {
      if(!req.body.refreshToken){
        throw new Error("No refresh Token");
      }

      const refreshToken = req.body.refreshToken;
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
      const newToken = await generateAccessToken({ userId: decoded.userId, username: decoded.username, userType: decoded.userType });
      const newRefreshToken = await generateRefreshToken({ userId: decoded.userId, username: decoded.username, userType: decoded.userType });
      
      res.status(200);
      res.send({
        token: newToken,
        refreshToken: newRefreshToken
      });
    } catch (err) {
      console.log("err refreshing token -->" + err);
    }
  }

  module.exports = validateRefreshToken;