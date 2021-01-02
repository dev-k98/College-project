const { Binary } = require("mongodb")
const mongoose = require("mongoose")
const SchemaItem = new mongoose.Schema({
	user_id: {
		type: String,
		// required: true,
	},
	receiver_id: {
		type: String,
	},
	//   item description
	item_name: {
		type: String,
		required: true,
	},
	item_status: { type: Boolean, default: "true" },
	post_date: { type: Date, default: Date.now() },
	deal_date: { type: Date },

	item_type: {
		type: String,
		required: true,
	},
	video: { type: Array },
	images: { type: Buffer, contentType: String },
	item_description: {
		type: String,
		required: true,
	},
	expected_exchange: {
		type: String,
	},
})

const Item = mongoose.model("Item", SchemaItem)
module.exports = Item
