import React, { useEffect, useState } from "react"
import "../Styles/Navbar.css"
import { Link } from "react-router-dom"
//image
import search from "../Images/search.png"
import config from "./config"

import logo from "../Images/logo1.svg"
import Dropdown from "./Dropdown"

export default function Navbar() {
	const [dropdown, setDropdown] = useState(false)
	const mouseEntered = () => {
		setDropdown(true)
	}
	const mouseLeaves = () => {
		setDropdown(false)
	}
	const [user, setuser] = useState({})
	const [vis, setvis] = useState(false)

	useEffect(() => {
		config.then(res => setuser(res.user))
	}, [vis])

	if (!vis) setvis(!vis)
	let email = user ? user.email : ""

	return (
		<div className='navbar'>
			<h1 className='head-elem'>
				<Link to='/Home'>
					<img className='logo' src={logo} alt='Barter' />
				</Link>
				<div className='search-section'>
					<input className='search' placeholder='Search...'></input>
					<button className='search-button'>
						<img src={search} alt='search' />
					</button>
				</div>
			</h1>
			<ul className='navi-icons'>
				<Link to='/Home'>
					<li className='home nvi-opt'>Home</li>
				</Link>
				{/* <Link to='/Notifications'>
					<li className='nftn nvi-opt'>Inbox</li>
				</Link> */}
				<Link to='/About'>
					<li className='about nvi-opt'>About</li>
				</Link>
				<div
					onMouseEnter={mouseEntered}
					onMouseLeave={mouseLeaves}
					className='profile'
				>
					<Link
						to={{ pathname: `/profile/${email}` }}
						className='nvi-opt'
					>
						{user ? (
							user.name
						) : (
							<Link
								to={{ pathname: `/signup` }}
								className='nvi-opt'
							>
								join
							</Link>
						)}
					</Link>
					{dropdown && <Dropdown />}
				</div>
			</ul>
		</div>
	)
}
