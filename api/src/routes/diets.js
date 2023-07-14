const express = require("express");
const router = express.Router();

const { getDiets } = require("../controllers");

router.get("/", getDiets);

module.exports = router;
