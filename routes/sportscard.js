const router = require("express").Router();
const sportscardController = require("../controllers/sportscardController");


// Matches with "/api/merch"
router.route("/sportscard")
  .get(sportscardController.findAll)


  
  

// Matches with "/api/merch/:id"

 

module.exports = router;