import React, { useState } from "react"
import "../Styles/Navbar.css"
import { Link } from "react-router-dom"

//image
import search from "../Images/search.png"

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
				<Link to='/Notifications'>
					<li className='nftn nvi-opt'>Inbox</li>
				</Link>
				<Link to='/About'>
					<li className='about nvi-opt'>About</li>
				</Link>
				<div
					onMouseEnter={mouseEntered}
					onMouseLeave={mouseLeaves}
					className='profile'
				>
					<Link
						to='/profile/devkbabarwal@gmail.com'
						className='nvi-opt'
					>
						Join
					</Link>
					{dropdown && <Dropdown />}
				</div>
			</ul>
		</div>
	)
}
