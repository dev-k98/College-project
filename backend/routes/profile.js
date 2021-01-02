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
// @desc    route for adding profile

router.post("/", async (req, res) => {
  Profile(req.body).save(function (err, doc) {
    if (err) {
      console.log("Post data error");
      res.send(`Error ${err.message} `);
    } else {
      console.log("Post data success");
      res.send(doc);
    }
  });
});
//under development-------------------------------------
// @type    POST
// @route   /api/profile/edit
// @desc    route for editing profile
router.post("/edit", async (req, res) => {
  Profile(req.body).save(function (err, doc) {
    if (err) {
      console.log("Post data error");
      res.send(`Error ${err.message} `);
    } else {
      console.log("Post data success");
      res.send(doc);
    }
  });
});

module.exports = router;
