var express = require("express");
var router = express.Router();
var Player = require("../models/players");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  const players = await Player.find({});
  res.json({ payload: players });
});

module.exports = router;
