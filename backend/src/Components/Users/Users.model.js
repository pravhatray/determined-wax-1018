const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String,max:8,required:true },

});

const User = mongoose.model("user", userSchema);
module.exports = User;
