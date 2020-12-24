import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "./Login.css"
export default function Login(props) {
	const user = {
		username: "Dev Babarwal",
		emial: "Dev4kumawat@gmail.com",
		password: "asdf",
	}
	const [cred, setCred] = useState({
		username: "",
		emial: "",
		password: "",
	})

	const credCheck = e => {
		console.log(cred)
		loggedin()
		e.preventDefault()
	}
	const loggedin = () => {
		if (user.username === cred.username) props.history.push("/")
	}

	return (
		<>
			<div className='loginmain'>
				<Navbar />
				<div className='loginform'>
					<form className='log-cont' onSubmit={credCheck}>
						<h1 className='login'>Log in</h1>
						<input
							className='username inpcmpt'
							type='text'
							placeholder='username/emial'
							value={cred.username}
							onChange={e =>
								setCred({ ...cred, username: e.target.value })
							}
						></input>
						<input
							className='password inpcmpt'
							type='password'
							placeholder='password'
							value={cred.password}
							onChange={e =>
								setCred({ ...cred, password: e.target.value })
							}
						></input>
						<button className='btnlogin' type='submit'>
							submit
						</button>
					</form>
					<footer>
						<span className='forgot'>forgot</span>
						<span> | </span>
						<Link to='/signup'>
							<span className='register'>register</span>
						</Link>
					</footer>
				</div>
			</div>
		</>
	)
}
