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
import Edit from "./Components/Profile/Edit"
import Help from "./Components/Help"
import Search from "./Components/Search"

export default function App() {
	return (
		<>
			<Router>
				<Route path='/' exact component={Home} />
				<Route path='/home' exact component={Home} />
				<Route path='/help' exact component={Help} />
				<Route path='/profile/:email' component={Profile} />
				<Route path='/signup' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/Notifications' component={Inbox} />
				<Route path='/About' component={About} />
				<Route path='/upload' component={Upload} />
				<Route path='/photos' component={Photos} />
				<Route path='/item/:type' component={Search} />
				<Route path='/edit/:email' component={Edit} />
				<Route path='/post/:id' component={Post} />
			</Router>
		</>
	)
}
