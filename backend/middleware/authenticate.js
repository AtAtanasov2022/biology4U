const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorizations")
    console.log(authHeader);
    if (!authHeader) {
      return res.status(401).send('Unauthorized');
    }
  
    const token = authHeader.split(' ')[1];
    // const token = authHeader;
    try {
      console.log("Token");
      console.log(token);
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.body = decoded.user;
      next();
    } catch (err) {
      next();
      console.log("err-->" + err);
      return res.status(401).send('Unauthorized');
    }
  }

  module.exports = authenticate;