var mongoose = require("mongoose");

var footballerSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  Age: Number,
  Photo: String,
  Nationality: String,
  Flag: String,
  Overall: Number,
  Potential: Number,
  Club: String,
  "Club Logo": String,
  Value: String,
  Wage: String,
  Special: Number,
  "Preferred Foot": String,
  "International Reputation": Number,
  "Weak Foot": Number,
  "Skill Moves": Number,
  "Work Rate": String,
  "Body Type": String,
  "Real Face": String,
  Position: String,
  "Jersey Number": Number,
  Joined: String,
  "Loaned From": String,
  "Contract Valid Until": String,
  Height: String,
  Weight: String,
  LS: String,
  ST: String,
  RS: String,
  LW: String,
  LF: String,
  CF: String,
  RF: String,
  RW: String,
  LAM: String,
  CAM: String,
  RAM: String,
  LM: String,
  LCM: String,
  CM: String,
  RCM: String,
  RM: String,
  LWB: String,
  LDM: String,
  CDM: String,
  RDM: String,
  RWB: String,
  LB: String,
  LCB: String,
  CB: String,
  RCB: String,
  RB: String,
  Crossing: Number,
  Finishing: Number,
  HeadingAccuracy: Number,
  ShortPassing: Number,
  Volleys: Number,
  Dribbling: Number,
  Curve: Number,
  FKAccuracy: Number,
  LongPassing: Number,
  BallControl: Number,
  Acceleration: Number,
  SprintSpeed: Number,
  Agility: Number,
  Reactions: Number,
  Balance: Number,
  ShotPower: Number,
  Jumping: Number,
  Stamina: Number,
  Strength: Number,
  LongShots: Number,
  Aggression: Number,
  Interceptions: Number,
  Positioning: Number,
  Vision: Number,
  Penalties: Number,
  Composure: Number,
  Marking: Number,
  StandingTackle: Number,
  SlidingTackle: Number,
  GKDiving: Number,
  GKHandling: Number,
  GKKicking: Number,
  GKPositioning: Number,
  GKReflexes: Number,
  "Release Clause": String
});

module.exports = mongoose.model("players", footballerSchema);
