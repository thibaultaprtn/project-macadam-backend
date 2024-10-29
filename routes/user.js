const express = require("express");
const router = express.Router();
router.use(express.json());

const User = require("../models/User");

//Import des fonctions
const signUp = require("../utilitaryFunctions/signUp");
const logIn = require("../utilitaryFunctions/logIn");
const isTokenValid = require("../utilitaryFunctions/isTokenValid");
const isAdminTokenValid = require("../utilitaryFunctions/isAdminTokenValid");

//Route de Signup
router.post("/", signUp);

//Route de Signin
router.get("/", logIn);

//Route permettant de vérifier si le token fournit est valide pour resteindre les pages dans le front end
router.get("/valid", isTokenValid, async (req, res) => {
  res.status(200).json(req.admin);
});

//Route permmetant de vérifier si le token est bien celui d'un admin pour restreindre les pages dans le front end
router.get("/validadmin", isAdminTokenValid, (req, res) => {
  res.status(200).json(req.admin);
});

module.exports = router;
