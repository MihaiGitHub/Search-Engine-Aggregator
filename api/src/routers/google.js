const express = require("express");
const router = express.Router();

const { read } = require("../controllers/google");

router.post("/google", read);

module.exports = router;
