const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  images: { type: Array },

  about: {
    type: String,
  },
  feedback: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Profile = mongoose.model("Profile", userSchema);
module.exports = Profile;
