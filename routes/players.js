var express = require("express");
var router = express.Router();
var Player = require("../models/footballer.js");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const players = await Player.find({})
    res.json({payload: players});
});


router.get("/:id", async (req, res, next) => {
  const playerId = Number(req.params.id);
  const player = await Player.find({ID: playerId});
    res.json({payload: player});
});

router.post("/", async (req, res, next) => {
  const newFootballer = new Player(req.body);
  await newFootballer.save();
  res.json({ payload: newFootballer });
});


module.exports = router;
