const mongoose = require("mongoose");
const Sportscard = require("../models/sportscardModel.js");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sportsmentordb"
  );

  const sportscardSeed = [
      {
          sportsname: "Baseball",
          spImgUrl: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cfe6e6c4c687b0008593078%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D526%26cropX2%3D2241%26cropY1%3D121%26cropY2%3D1835",
          sportspage: "/baseball"
      },
      {
        sportsname: "Basketball",
        spImgUrl: "https://i.pinimg.com/originals/3b/46/b6/3b46b63df2bb8c2b3dab400b176d326e.jpg",
        sportspage: "/basketball"
    },
    {
        sportsname: "Football",
        spImgUrl: "https://cdn.vox-cdn.com/thumbor/KfFI-_kXWtnB5nbhK_EC9q68tsA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9566283/498829590.jpg",
        sportspage: "/football"
    },
    {
        sportsname: "Hockey",
        spImgUrl: "https://cdn.vox-cdn.com/thumbor/S_Zvk3SJnGHUT-M1OtHpj_mjoxg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19766758/usa_today_12473622.jpg",
        sportspage: "/hockey"
    },
    {
        sportsname: "Soccer",
        spImgUrl: "https://yt3.ggpht.com/a/AATXAJwXr0Q63VSwkFigPbG3ifqcSovnH4vivX2yow=s900-c-k-c0xffffffff-no-rj-mo",
        sportspage: "/soccer"
    }, 
    {
        sportsname: "Volleyball",
        spImgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Beach_volleyball_(4701437938).jpg/300px-Beach_volleyball_(4701437938).jpg",
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