const jwt = require('jsonwebtoken');
const generateAccessToken = require("../middleware/generateAccessToken")

const refreshToken = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: 'Invalid refresh token'});
        }

        const token = generateAccessToken({userId: decoded.id, username: decoded.username, userType: decoded.userType });
        res.send({token});
    })
}

module.exports = {
    refreshToken
}