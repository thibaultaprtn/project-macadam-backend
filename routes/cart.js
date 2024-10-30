const express = require("express");
const router = express.Router();
router.use(express.json());

const Cart = require("../models/Cart");

const isAdminTokenValid = require("../utilitaryFunctions/isAdminTokenValid");
const addCart = require("../utilitaryFunctions/addCart");
const getCarts = require("../utilitaryFunctions/getCarts");

router.post("/", addCart);

router.get("/", isAdminTokenValid, getCarts);

module.exports = router;
