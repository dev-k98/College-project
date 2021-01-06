import React from "react"
import { Link } from "react-router-dom"
import "../Styles/footer.css"
export default function Footer() {
	return (
		<div className='site-footer'>
			<Link to='/about'>
				<div className='footer-links'>About Us</div>
			</Link>
			<div className='footer-links'>Contact US</div>
			<div className='footer-links'>Help</div>
			<a
				href='https://github.com/dev-k98/College-project'
				className='footer-links'
			>
				Project Repository
			</a>
		</div>
	)
}
