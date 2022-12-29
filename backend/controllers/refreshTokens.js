const refreshToken = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        return res.status(401).send('Unauthorized');
    }

    let username;
    users.forEach(user => {
        if (user.refreshTokens.includes(refreshToken)) {
            username = user.username;
            user.refreshTokens = user.refreshTokens.filter(t => t !== refreshToken);
        }
    });
    if (!username) {
        return res.status(401).send('Unauthorized');
    }

    const jwt = generateJWT(username);
    res.cookie('jwt', jwt, { httpOnly: true });
    res.send('Refresh successful');
}

module.exports = {
    refreshToken
}