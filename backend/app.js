const session = require("express-session")
const flash = require("connect-flash")
const express = require("express")
const router = express.Router()
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const expressEjslayout = require("express-ejs-layouts")
const passport = require("passport")
const cors = require("cors")
require("./config/passport")(passport)

//mongoose
mongoose.connect("mongodb://127.0.0.1/barterDatabase")
var db = mongoose.connection
db.once("open", function (callback) {
	console.log("we are connected")
})
db.on("error", function () {
	console.log.bind(console, "connection error")
})

//ejs
app.set("view engine", "ejs")
app.use(expressEjslayout)
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
)

app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
)
app.use(passport.initialize())
app.use(passport.session())
//flash
app.use(flash())
app.use(cors())

app.use((req, res, next) => {
	res.locals.success_msg = req.flash("success_msg")
	res.locals.error_msg = req.flash("error_msg")
	res.locals.error = req.flash("error")
	next()
})
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users"))

app.use("/item", require("./routes/item"))
app.use("/upload", require("./routes/upload"))
app.listen(7000, () => console.log("server is listening to port 7000"))
