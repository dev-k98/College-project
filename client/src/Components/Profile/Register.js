import React, { useState } from "react"
import axios from "axios"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"

import Footer from "../Footer"

export default function Register(props) {
	const [cred, setCred] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
		confirmpassword: "",
	})

	const [warning, setwarning] = useState("")
	const [cls, setclass] = useState({ display: "hidden" })

	const credCheck = e => {
		axios({
			method: "POST",
			data: cred,
			url: "http://localhost:7000/users/register",
		}).then(res => checkCred(res.data))
		e.preventDefault()
	}

	const checkCred = data => {
		if (data.errors) {
			console.log("ran")
			setwarning(data.errors[0].msg)
			setclass({
				color: "#ff0909",
				padding: "5px",
			})
		} else {
			props.history.push("/")
		}
	}

	return (
		<>
			<Navbar />
			<div className='loginform'>
				<form className='log-cont' onSubmit={credCheck}>
					<h1 className='login'>Register</h1>
					<input
						className='username inpcmpt'
						type='username'
						placeholder='Username'
						value={cred.username}
						onChange={e =>
							setCred({ ...cred, username: e.target.value })
						}
					></input>
					<input
						className='inpcmpt'
						type='name'
						placeholder='Name'
						value={cred.name}
						onChange={e =>
							setCred({
								...cred,
								name: e.target.value,
							})
						}
					></input>
					<input
						className='email inpcmpt'
						type='email'
						placeholder='E-mail'
						value={cred.email}
						onChange={e =>
							setCred({ ...cred, email: e.target.value })
						}
					></input>
					<input
						className='password inpcmpt'
						type='password'
						placeholder='Password'
						value={cred.password}
						onChange={e =>
							setCred({ ...cred, password: e.target.value })
						}
					></input>
					<input
						className='inpcmpt'
						type='password'
						placeholder='Confirm Password'
						value={cred.confirmpassword}
						onChange={e =>
							setCred({
								...cred,
								confirmpassword: e.target.value,
							})
						}
					></input>
					<div style={cls}>{warning}</div>
					<button className='btnlogin' type='submit'>
						submit
					</button>
				</form>
				<footer>
					<Link to='/login'>
						<span className='register'>Login</span>
					</Link>
				</footer>
			</div>
			<div
				style={{
					position: "fixed",
					bottom: 0,
					width: "100%",
					backgroundColor: "black",
					color: "white",
					textAlign: "center",
				}}
			>
				<Footer />
			</div>
		</>
	)
}
