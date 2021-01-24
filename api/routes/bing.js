const express = require("express");
const router = express.Router();

const { read } = require("../controllers/bing");

router.post("/bing", read);

module.exports = router;
