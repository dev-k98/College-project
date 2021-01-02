const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  image: { type: String },
  about: {
    type: String,
  },

  phoneno: {
    type: String,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
