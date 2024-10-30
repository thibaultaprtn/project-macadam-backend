const express = require("express");
const router = express.Router();
router.use(express.json());

const Cart = require("../models/Cart");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
