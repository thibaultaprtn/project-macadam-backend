const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const User = require("../models/User");

const signUp = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(req.headers.managerkey);
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Il manque un paramètre dans les champs d'entrée" });
    }
    let tab = await User.findOne({ username: username });
    if (tab) {
      return res
        .status(409) //statut pour le conflit
        .json({ message: "Le nom d'utilisateur a déjà été attribué" });
    }
    const salt = uid2(64);
    const token = uid2(64);
    const hash = SHA256(password + salt).toString(encBase64);

    let newUser = new User({
      username: username,
      token: token,
      hash: hash,
      salt: salt,
    });
    await newUser.save();
    // req.body._id = newAdmin._id;
    // req.body.token = newAdmin.token;
    res.status(201).json({
      _id: newUser._id,
      username: req.body.username,
      token: newUser.token,
    });
    // return next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = signUp;
