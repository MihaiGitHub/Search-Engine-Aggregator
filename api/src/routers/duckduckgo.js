const express = require("express");
const router = express.Router();

const { read } = require("../controllers/duckduckgo");

router.post("/duckduckgo", read);

module.exports = router;
