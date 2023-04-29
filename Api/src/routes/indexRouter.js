const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  return res.status(200).json({ msg: "completed" });
});

module.exports = router;
