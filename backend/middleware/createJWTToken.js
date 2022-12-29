const generateAccessToken = async (userId) => {
    return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '30m' });
}

module.exports = generateAccessToken;