import React, { useState } from "react"
import "../Styles/Navbar.css"
import { Link } from "react-router-dom"

//image
import profile from "../Images/profile.svg"
import logo from "../Images/logo.svg"
import Dropdown from "./Dropdown"

export default function Nevbar() {
	const [dropdown, setDropdown] = useState(false)

	const mouseEntered = () => {
		setDropdown(true)
	}
	const mouseLeaves = () => {
		setDropdown(false)
	}

	return (
		<div className='navbar'>
			<h1 className='logo head-elem'>
				<Link to='/Home'>
					<img src={logo} alt='Barter' />
				</Link>
			</h1>
			<ul className='navi-icons'>
				<Link to='/Home'>
					<li className='home nvi-opt'>Home</li>
				</Link>
				<Link to='/Notifications'>
					<li className='nftn nvi-opt'>Notifications</li>
				</Link>
				<Link to='/About'>
					<li className='about nvi-opt'>About</li>
				</Link>
				<div
					onMouseEnter={mouseEntered}
					onMouseLeave={mouseLeaves}
					className='profile head-elem'
				>
					<Link to='/profile'>
						<img src={profile} alt='Profile' />
					</Link>
					{dropdown && <Dropdown />}
				</div>
			</ul>
		</div>
	)
}
