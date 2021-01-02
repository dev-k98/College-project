const Profile = require("../models/profile");
const express = require("express");
const router = express.Router();

// @type    get
// @route   /api/profile/userid
// @desc    route for getting specific profile
router.get("/:userid", async (req, res) => {
  const profilelist = await Profile.find({ userid: req.params.userid });
  res.send(profilelist);
});

// @type    POST
// @route   /api/profile
// @desc    route for adding and editing profile

router.post("/", async (req, res) => {
  Profile.findOneAndUpdate(
    {
      userid: req.body.userid,
    },
    {
      $set: {
        userid: req.body.userid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        images: req.body.images,
        about: req.body.about,
        feedback: req.body.feedback,
        phoneno: req.body.phoneno,
        address: req.body.address,
      },
    },

    { new: true, upsert: true }
  )
    .then((res) => res.send(res))
    .catch((err) => res.send(err));
});

module.exports = router;
