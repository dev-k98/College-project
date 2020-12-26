import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Components/Navigation/Home"
import Profile from "./Components/Profile/Profile"
import Register from "./Components/Profile/Register"
import Login from "./Components/Profile/Login"
import Notification from "./Components/Navigation/Notification"
import About from "./Components/Navigation/About"
import Upload from "./Components/options/Upload"

export default function App() {
	return (
		<>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/home' exact component={Home} />
				<Route path='/profile' component={Profile} />
				<Route path='/signup' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/Notifications' component={Notification} />
				<Route path='/About' component={About} />
				<Route path='/upload' component={Upload} />
			</Router>
		</>
	)
}
