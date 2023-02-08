const jwt = require("jsonwebtoken")
const generateAccessToken = async (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '30m' });
}

const generateRefreshToken = async (user) => {
    return jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: '7d' });
}

module.exports = { generateAccessToken, generateRefreshToken };