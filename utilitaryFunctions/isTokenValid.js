const User = require("../models/User");

const isTokenValid = async (req, res, next) => {
  try {
    // console.log(req.headers.token);
    const response = await User.findOne({ token: req.headers.token });
    if (response) {
      req.admin = response;
      return next();
    } else
      res.status(401).json({ message: "Le token fourni n'est pas valide" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = isTokenValid;
