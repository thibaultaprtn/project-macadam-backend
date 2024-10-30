const express = require("express");
const router = express.Router();
router.use(express.json());

const Product = require("../models/Product");

//Import des fonctions
const isAdminTokenValid = require("../utilitaryFunctions/isAdminTokenValid");
const isTokenValid = require("../utilitaryFunctions/isTokenValid");
const addItem = require("../utilitaryFunctions/addItem");
const getAllItems = require("../utilitaryFunctions/getAllItems");
const getLimitedItems = require("../utilitaryFunctions/getLimitedItems");
const getItem = require("../utilitaryFunctions/getItem");
const modifyItem = require("../utilitaryFunctions/modifyItem");
const deleteItem = require("../utilitaryFunctions/deleteItem");

//Route en get pour n'avoir que les produits disponibles pour tout le monde
router.get("/limited", getLimitedItems);

//Route en get avec un token pour avoir l'intégralité des produits
router.get("/all", isTokenValid, getAllItems); //

//Route en get pour obtenir les informations d'un produit à partir de son id
router.get("/:id", isTokenValid, getItem);

//Route en post pour rajouter un nouveau produit
router.post("/", isAdminTokenValid, addItem);

//Route en put pour modifier un produit existant
router.put("/:id", isAdminTokenValid, modifyItem);

//Route en delete pour supprimer un produit existant
router.delete("/:id", isAdminTokenValid, deleteItem);

module.exports = router;
