const mongoose = require("mongoose");
const Sportscard = require("../models/sportscardModel.js");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sportsmentordb"
  );

  const sportscardSeed = [
      {
          sportsname: "Baseball",
          spImgUrl: "",
          sportspage: "/baseball"
      },
      {
        sportsname: "Basketball",
        spImgUrl: "https://www.michaeljordansworld.com/pictures/images/michael_jordan_1997_03.jpg",
        sportspage: "/basketball"
    },
    {
        sportsname: "Football",
        spImgUrl: "",
        sportspage: "/football"
    },
    {
        sportsname: "Hockey",
        spImgUrl: "",
        sportspage: "/hockey"
    },
    {
        sportsname: "Soccer",
        spImgUrl: "",
        sportspage: "/soccer"
    }, 
    {
        sportsname: "Volleyball",
        spImgUrl: "",
        sportspage: "/volleyball"
    },

  ];

  Sportscard
  .remove({})
  .then(() => Sportscard.collection.insertMany(sportscardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });