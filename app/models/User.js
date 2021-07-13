const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  introduction: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
