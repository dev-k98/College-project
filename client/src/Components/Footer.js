import React from "react"
import { Link } from "react-router-dom"
import "../Styles/footer.css"
export default function Footer() {
	return (
		<div className='site-footer'>
			<Link to='/about'>
				<div className='footer-links'>About Us</div>
			</Link>
			<Link to='/help'>
				<div className='footer-links'>Help</div>
			</Link>
			<a
				href='https://github.com/dev-k98/College-project'
				className='footer-links'
			>
				Project Repository
			</a>
		</div>
	)
}
