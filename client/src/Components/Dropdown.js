import React, { useEffect, useState } from "react"
import "../Styles/Dropdown.css"
import { Link } from "react-router-dom"
import { login, signup } from "./DropMenu"
import config from "./config"
import axios from "axios"

export default function Dropdown() {
	const [user, setuser] = useState({})
	const [vis, setvis] = useState(false)

	useEffect(() => {
		config.then(res => setuser(res.user))
	}, [vis])

	if (!vis) setvis(!vis)

	let Dropmenu = user ? login : signup

	axios.defaults.withCredentials = true
	const logout = () => {
		axios({
			method: "GET",
			url: "http://localhost:7000/users/logout",
		}).then(res => console.log(res))
	}

	return (
		<div className='dropdown'>
			{Dropmenu.map((items, index) => {
				return (
					<Link to={items.link} key={index}>
						<li
							onClick={items.onclick ? logout : null}
							className={`${items.class} prtag`}
						>
							{items.title}
						</li>
					</Link>
				)
			})}
		</div>
	)
}
