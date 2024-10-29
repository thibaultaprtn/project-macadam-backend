const User = require("../models/User");

const isAdminTokenValid = async (req, res, next) => {
  try {
    console.log(req.headers.token);
    const response = await User.findOne({ token: req.headers.token });
    if (response.username) {
      // req.admin = response;
      // console.log(response.username);
      // console.log(process.env.ADMINS, typeof process.env.ADMINS);
      let tab = process.env.ADMINS.split(",");
      // console.log(tab);
      // console.log(tab.indexOf(response.username));
      if (tab.indexOf(response.username) !== -1) {
        console.log("requete admin");
        return next();
      } else {
        res
          .status(401)
          .json({ message: "L'utilisateur n'est pas défini comme Admin" });
      }
    } else
      res.status(401).json({ message: "Le token fourni n'est pas valide" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = isAdminTokenValid;
