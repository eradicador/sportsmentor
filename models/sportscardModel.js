const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SportscardSchema = new Schema({
  spImgUrl: { type: String, required: true },
  sportsname: { type: String, required: true },
  sportsLink1: String,
  sportsLink2: String,
  sportsLink3: String,
  sportsLink4: String,
});

const Sportscard = mongoose.model("Sportscard", SportscardSchema);

module.exports = Sportscard;
