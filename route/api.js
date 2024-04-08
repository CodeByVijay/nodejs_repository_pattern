const express = require("express");
const { testAPI } = require("../app/controllers/TestConroller");
const router = express.Router();
router.get("/", testAPI);
module.exports = router;
