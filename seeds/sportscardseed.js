const mongoose = require("mongoose");
const Sportscard = require("../models/sportscardModel");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sportsmentordb"
  );

  const sportscardSeed = [
      {
          sportsname: "Baseball",
          spImgUrl: "",
          sportsLink1: "<a href='' "
      }
  ]