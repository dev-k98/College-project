const User = require("../models/user.js");
const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passport2 = require("../config/passport.js");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});
// this is to be edited by vanshika- add "images",about,phoneno,address  in login route
router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    {
      successRedirect: "/dashboard",
      failureRedirect: "/users/login",
      failureFlash: true,
    },
    (err, user, msg) => {
      if (err) res.send(err);
      if (user) res.send(user);
      if (msg) res.send(msg);
    }
  )(req, res, next);
});

router.post("/register", (req, res) => {
  const { username, name, email, password, confirmpassword } = req.body;
  let errors = [];
  console.log(
    "username:" +
      username +
      "name:" +
      name +
      "email:" +
      email +
      "password:" +
      password
  );
  if (!username || !name || !email || !password || !confirmpassword) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password != confirmpassword) {
    errors.push({ msg: "Password dont match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password should be atleast 6 characters" });
  }

  if (errors.length > 0) {
    res.send({
      errors: errors,
      username: username,
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    });
  } else {
    User.findOne({ email: email }).exec((err, user) => {
      console.log(user);
      if (user) {
        errors.push({ msg: "email already registered" });
        res.send({
          errors,
          username,
          name,
          email,
          password,
          confirmpassword,
        });
      } else {
        const newUser = new User({
          username: username,
          name: name,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //save pass to hash
            newUser.password = hash;
            //save user
            newUser
              .save()
              .then((value) => {
                console.log(value);
                req.flash("success_msg", "You have now registered!");
                // res.redirect('/users/login');
              })
              .catch((value) => console.log(value));
          })
        );
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "Now Logged Out");
  res.redirect("/users/login");
});

// to get specific user profile and edit it

// @type    get
// @route   /api/users/email
// @desc    route for getting specific profile
router.get("/:email", async (req, res) => {
  const profilelist = await User.find({ email: req.params.email });
  res.send(profilelist);
});

// @type    POST
// @route   /api/users
// @desc    route for editing profile

router.post("/edit", async (req, res) => {
  User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        images: req.body.images,
        about: req.body.about,
        phoneno: req.body.phoneno,
        address: req.body.address,
      },
    },

    { new: true, upsert: true }
  )
    .then((res) => res.send("ok"))
    .catch((err) => res.send(err));
});

module.exports = router;
