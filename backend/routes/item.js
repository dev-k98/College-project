const Item = require("../models/item");

const express = require("express");
const router = express.Router();

// @type    get
// @route   /api/item/
// @desc    route for getting active items
router.get("/", async (req, res) => {
  const item = await Item.findOne({
    item_status: true,
  });
  res.send(item);
});

// @type    POST
// @route   /api/item
// @desc    route for adding item

router.post("/", async (req, res) => {
  Item(req.body).save(function (err, doc) {
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