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
          sportsLink1: "",
          sportsLink2: "",
          sportsLink3: "",
          sportsLink4: ""
      },
      {
        sportsname: "Basketball",
        spImgUrl: "https://www.michaeljordansworld.com/pictures/images/michael_jordan_1997_03.jpg",
        sportsLink1: "",
        sportsLink2: "",
        sportsLink3: "",
        sportsLink4: ""
    },
    {
        sportsname: "Football",
        spImgUrl: "",
        sportsLink1: "",
        sportsLink2: "",
        sportsLink3: "",
        sportsLink4: ""
    },
    {
        sportsname: "Hockey",
        spImgUrl: "",
        sportsLink1: "",
        sportsLink2: "",
        sportsLink3: "",
        sportsLink4: ""
    },
    {
        sportsname: "Soccer",
        spImgUrl: "",
        sportsLink1: "",
        sportsLink2: "",
        sportsLink3: "",
        sportsLink4: ""
    }, 
    {
        sportsname: "Volleyball",
        spImgUrl: "",
        sportsLink1: "",
        sportsLink2: "",
        sportsLink3: "",
        sportsLink4: ""
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