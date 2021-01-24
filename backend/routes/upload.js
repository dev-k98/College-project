const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const { uuid } = require("uuidv4")
const fs = require("fs")
const Item = require("../models/item.js")
//multer setting
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// cb(null, "images")
		cb(null, `../client/src/Components/upload`)
	},
	filename: function (req, file, cb) {
		cb(null, uuid() + "-" + Date.now() + path.extname(file.originalname))
	},
})
var upload = multer({
	storage: storage,
})

router.post("/", upload.single("file"), (req, res) => {
	try {
		console.log(req.body.user_email)
		const {
			item_name,
			item_type,
			item_location,
			user_email,
			item_description,
			expected_exchange,
		} = req.body
		console.log(
			"itemname " +
				item_name +
				" itemtype " +
				item_type +
				" item_location " +
				item_location +
				" user_email " +
				user_email +
				" description " +
				item_description +
				" exchange " +
				expected_exchange
		)

		const img = fs.readFileSync(req.file.path)

		let end_img = img.toString("base64")

		let image = {
			contentType: req.file.mimetype,
			path: req.file.path,
			image: new Buffer.from(end_img, "base64"),
		}
		const newItem = new Item({
			item_name: item_name,
			item_type: item_type,
			user_email: user_email,
			item_location: item_location,
			item_description: item_description,
			expected_exchange: expected_exchange,
			images: req.file.path.slice(32, req.file.path.length),
		})

		newItem
			.save()
			.then(value => {
				console.log(value)
				// res.send(value)
			})

			.catch()
		// res.status(200).send("ok")
		// res.send(res)
		pathhere = req.file.path
		console.log(req.file)
		res.send({ path: pathhere.slice(8, pathhere.length) })
	} catch (err) {
		res.status(400).send(err)
	}
})

router.get("/", async (req, res) => {
	console.log("***GET TEST***")
	res.render("upload")
})

module.exports = router
