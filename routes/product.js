const express = require("express");
const router = express.Router();
router.use(express.json());

const Product = require("../models/Product");

//Import des fonctions
const isAdminTokenValid = require("../utilitaryFunctions/isAdminTokenValid");
const isTokenValid = require("../utilitaryFunctions/isTokenValid");
const addItem = require("../utilitaryFunctions/addItem");
const getAllItems = require("../utilitaryFunctions/getAllItems");
const getItem = require("../utilitaryFunctions/getItem");
const modifyItem = require("../utilitaryFunctions/modifyItem");
const deleteItem = require("../utilitaryFunctions/deleteItem");

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
router.get("/all", isTokenValid, getAllItems); //

//Route en get pour obtenir les informations d'un produit à partir de son id
router.get("/:id", isTokenValid, getItem);

//Route en post pour rajouter un nouveau produit
router.post("/", isAdminTokenValid, addItem);

//Route en put pour modifier un produit existant
router.put("/:id", isAdminTokenValid, modifyItem);

//Route en delente pour supprimer un produit existant
router.delete("/:id", isAdminTokenValid, deleteItem);

module.exports = router;
