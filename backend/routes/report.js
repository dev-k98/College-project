const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()
const reportData = require("../models/report.js")

router.get("/", (req, res) => {
	console.log("reported check")
	// res.render("reportdata")
})

router.post("/", (req, res) => {
	try {
		const { username, email, report_about, description } = req.body
		console.log(
			"username: " +
				username +
				" email:" +
				email +
				" report_about:" +
				report_about +
				" description:" +
				description
		)
		const newReport = new reportData({
			username: username,
			email: email,
			report_about: report_about,
			description: description,
		})
		var transpoter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "tstapione@gmail.com",
				pass: "admin4mail",
			},
		})

		var mailOptions = {
			from: "vanshikasundrani1998@gmail.com",
			to: email,
			subject: report_about,
			text: description,
		}

		transpoter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error)
			} else {
				console.log("Email Sent:" + info.response)
			}
		})
		newReport
			.save()
			.then(value => {
				console.log(("Value", value))
			})
			.catch(value => console.log(value))
	} catch (err) {
		res.status(400).send(err)
	}
})

module.exports = router
