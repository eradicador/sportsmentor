const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cardId: [
        {
          // Store ObjectIds in the array
          Sportscard: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Note"
        }
      ]
      
});

module.exports = User = mongoose.model("user", UserSchema);