import React from "react"
import Navbar from "../Navbar"
import "./profile.css"

export default function Profile() {
	return (
		<>
			<Navbar />
			<div className='profile-main'>
				<div className='profile-photo'>
					<img src='#' alt='DP' />
					<h1>Dev Babarwal</h1>
					<p>Geeta colony chandrawatiganj</p>
					<p>8966050903</p>
				</div>
				<div className='profile-details'>
					<h1>Hey ! This is Dev</h1>

					<p>Geeta colony chandrawatiganj</p>

					<h3>
						Edit profile <span>|</span> view profile
					</h3>
					<h4>Requested exchanges</h4>
					<div className='req-excng'></div>
					<h4>Offered exchanges</h4>
					<div className='ofrd-excng'></div>
				</div>
			</div>
		</>
	)
}
