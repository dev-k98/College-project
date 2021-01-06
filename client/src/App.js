import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Components/Navigation/Home"
import Profile from "./Components/Profile/Profile"
import Register from "./Components/Profile/Register"
import Login from "./Components/Profile/Login"
import Inbox from "./Components/Navigation/Inbox"
import About from "./Components/Navigation/About"
import Upload from "./Components/options/Upload"
import Photos from "./Components/Photos"
import Post from "./Components/Post"

export default function App() {
	return (
		<>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/home' exact component={Home} />
				<Route path='/profile' component={Profile} />
				<Route path='/signup' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/Notifications' component={Inbox} />
				<Route path='/About' component={About} />
				<Route path='/upload' component={Upload} />
				<Route path='/photos' component={Photos} />
				<Route path='/post' component={Post} />
			</Router>
		</>
	)
}
