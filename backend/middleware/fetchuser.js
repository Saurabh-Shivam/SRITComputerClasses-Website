const jwt = require("jsonwebtoken");

const JWT_SECRET = "Saurabhisagoodb$oy";

const fetchuser = (req, res, next) => {
  // Get the user from the JWT token and add id to req object
  const token = req.header("auth-token");
  // check if token is present or not
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    // extracting data from token
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();

    // if token is invalid
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
