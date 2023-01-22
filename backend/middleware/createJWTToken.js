const jwt = require("jsonwebtoken")
const generateAccessToken = async (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '30m' });
}

module.exports = {generateAccessToken};