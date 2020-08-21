const router = require("express").Router();
const sportscardController = require("../controllers/sportscardController");


// Matches with "/api/merch"
router.route("/sportscard")
  .get(sportscardController.findAll)


router.route("/sportscard/:email/:cardId")
  .post(sportscardController.create)
  
  

// Matches with "/api/merch/:id"

 

module.exports = router;