import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import axios from "axios"
import "./Login.css"
import Footer from "../Footer"
export default function Login(props) {
	const [cred, setCred] = useState({
		email: "",
		password: "",
	})

	const [warning, setwarning] = useState("")
	const [cls, setclass] = useState({ display: "hidden" })

	const credCheck = e => {
		axios({
			method: "POST",
			data: {
				email: cred.email,
				password: cred.password,
				submit: "Submit",
			},

			// withCredentials: true,
			url: "http://localhost:7000/users/login",
		}).then(res => checkCred(res.data))
		e.preventDefault()
	}

	const checkCred = data => {
		if (data.message) {
			setwarning(data.message)
			setclass({
				color: "#ff0909",
				padding: "5px",
			})
		} else props.history.push("/")
	}

	return (
		<>
			<Navbar />
			<div className='loginform'>
				<form className='log-cont' onSubmit={credCheck}>
					<h1 className='login'>Log in</h1>
					<input
						className='email inpcmpt'
						type='email'
						placeholder='emial'
						value={cred.email}
						onChange={e =>
							setCred({ ...cred, email: e.target.value })
						}
					></input>
					<input
						className='inpcmpt'
						type='current-password'
						placeholder='password'
						value={cred.password}
						onChange={e =>
							setCred({
								...cred,
								password: e.target.value,
							})
						}
					></input>
					<div style={cls}>{warning}</div>
					<button className='btnlogin' type='submit'>
						Log in
					</button>
				</form>
				<div>
					<span className='forgot'>forgot</span>
					<span> | </span>
					<Link to='/signup'>
						<span className='register'>register</span>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}
