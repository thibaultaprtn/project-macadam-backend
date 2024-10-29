const express = require("express");
const router = express.Router();
router.use(express.json());

const Cart = require("../models/Cart");

module.exports = router;
