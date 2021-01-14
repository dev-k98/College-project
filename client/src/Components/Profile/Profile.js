import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import axios from "axios"
import "./profile.css"
import img from "../../Images/profile.svg"
import Footer from "../Footer"

export default function Profile(props) {
	const [vis, setvis] = useState(false)
	const [profile, setprofile] = useState({})

	useEffect(() => {
		fetchData()
	}, [vis])

	const fetchData = () => {
		axios({
			method: "GET",
			url: `http://localhost:7000/users/${props.match.params.email}`,
		}).then(res => setprofile(res.data[0]))
	}
	console.log(profile)
	if (!vis) setvis(!vis)

	return (
		<>
			<Navbar />
			<div className='profile-main'>
				<div className='profile-photo'>
					<img className='photo' src={img} alt='DP' />
					<div className='details'>
						<div className='name'>{profile.name}</div>

						<div className='username'>{profile.username}</div>
						<div className='profile-about'>{profile.about}</div>
						<div className='profile-address'>{profile.address}</div>
						<div className='number'>{profile.phoneno}</div>
					</div>
					<h3 className='edit'>
						<Link to={{ pathname: `/edit/${profile.email}` }}>
							<span>Edit profile</span>
						</Link>
					</h3>
				</div>
				<div className='profile-details'>
					<div className='name'>Hi ! This is {profile.name}</div>
					<div className='req-excng'>
						<h3>Requested exchanges</h3>
					</div>
					<div className='ofrd-excng'>
						<h3>Offered exchanges</h3>
					</div>
				</div>
			</div>
			<div
				style={{
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
