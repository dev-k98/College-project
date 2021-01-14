const Item = require("../models/item")

const express = require("express")
const router = express.Router()

// @type    get
// @route   /api/item/
// @desc    route for getting active items
router.get("/", async (req, res) => {
	const item = await Item.find(
		{
			item_status: true,
		},
		(err, result) => {
			if (err) throw err
			else {
				// res.send(result[5].images)
			}
		}
	)
	res.send(item)
})

// @type    get
// @route   /api/item/id
// @desc    route for getting an item

router.get("/:id", async (req, res) => {
	const item = await Item.findOne(
		{
			_id: req.params.id,
		},
		(err, result) => {
			if (err) console.log(err)
			else {
				res.send(result)
			}
		}
	)
})

// @type    POST
// @route   /api/item
// @desc    route for adding item

router.post("/", async (req, res) => {
	Item(req.body).save(function (err, doc) {
		if (err) {
			console.log("Post data error")
			res.send(`Error ${err.message} `)
		} else {
			console.log("Post data success")
			res.send(doc)
		}
	})
})

module.exports = router
