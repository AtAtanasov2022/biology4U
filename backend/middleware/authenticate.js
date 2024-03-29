const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send('Unauthorized');
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      next();
    } catch (err) {
      next(err);
      console.log("err-->" + err);
      return;
    }
  }

  module.exports = authenticate;