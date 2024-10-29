const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const User = require("../models/User");

const logIn = async (req, res, next) => {
  try {
    // console.log(req);
    const { username, password } = req.query;
    //Les infos sont dans req.query (req.query.username et req.query.password)
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({
        message: "Le username renseigné ne correspond à aucun profil",
      });
    }
    let passwordToTest = SHA256(password + user.salt).toString(encBase64);
    if (passwordToTest === user.hash) {
      console.log("Identification réussie");
      return res.status(200).json({
        _id: user._id,
        username: user.username,
        token: user.token,
      });
    } else {
      return res.status(400).json({ message: "Le mot de passe est incorrect" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = logIn;
