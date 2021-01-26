const mongoose = require("mongoose")
const reportdata = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	report_about: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
})
const reportData = mongoose.model("reportData", reportdata)
module.exports = reportData
