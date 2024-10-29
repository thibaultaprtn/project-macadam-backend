const express = require("express");
const router = express.Router();
router.use(express.json());

const Product = require("../models/Product");

//Import des fonctions
const isAdminTokenValid = require("../utilitaryFunctions/isAdminTokenValid");
const isTokenValid = require("../utilitaryFunctions/isTokenValid");

//Route en get pour n'avoir que les produits disponibles pour tout le monde
router.get("/limited", async (req, res) => {
  try {
    const response = Product
      .find
      //Ecrire la condition de filtre pour les produits uniquement pour utilisateurs non authentifiés
      ();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Route en get pour avec un token pour avoir l'intégralité des produits
router.get("/all", isTokenValid, async (req, res) => {
  try {
    const response = Product.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Route en post pour rajouter un nouveau produit
router.post("/", isAdminTokenValid);

//Route en put pour modifier un produit existant
router.put("/", isAdminTokenValid);

//Route en delente pour supprimer un produit existant
router.delete("/", isAdminTokenValid);

module.exports = router;
