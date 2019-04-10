var express = require("express");
var router = express.Router();
var Player = require("../models/footballer");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const players = await Player.find({});
  res.json({ payload: players });
});

/* GET one player */
router.get("/:id", async (req, res, next) => {
  const id = Number(req.body.params);
  const player = await Player.findOne({ ID: id });
  res.json({ payload: player });
});

router.post("/", async (req, res, next) => {
  const player = await new Player(req.body);
  await player.save();
  res.json({ playload: player });
});

router.patch("/:id", async (req, res, next) => {
  const player = await Player.findOne({ ID: req.params.id });
  const updates = Object.keys(req.body);
  updates.forEach(update => {
    player(update) = req.body(update);
  });
  const success = await player.save();
  res.json({ payload: success, message: `Updated ${req.param.id}` })
});


router.delete("/:id", async (req, res, next) => {
  const player = await Player.findOneAndRemove({ID: req.params.id});
  res.json({ payload: player, message: `removed ${req.params.id}`});
});


module.exports = router;
