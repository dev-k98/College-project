import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import img from "../../Images/profile.svg"
import Footer from "../Footer"
import "./Edit.css"

export default function Edit(props) {
	const [vis, setvis] = useState(false)
	const [profile, setprofile] = useState({})

	useEffect(() => {
		fetchData()
	}, [vis])

	const fetchData = () => {
		console.log(props)
		axios({
			method: "GET",

			url: `http://localhost:7000/users/${props.match.params.email}`,
		}).then(res => setprofile(res.data[0]))
	}

	const confirmChanges = () => {
		console.log(props)
		axios({
			method: "POST",
			data: profile,
			url: `http://localhost:7000/users/edit`,
		}).then(res => response(res.statusText))
	}

	const response = data => {
		if (data === "OK") props.history.push(`/profile/${profile.email}`)
		else {
			console.log("error")
		}
	}

	if (!vis) setvis(!vis)

	return (
		<>
			<Navbar />
			<div className='profile-main'>
				<div className='profile-photo'>
					<div className='container'>
						<div className='avatar-upload'>
							<div className='avatar-edit'>
								<input
									type='file'
									id='imageUpload'
									accept='.png, .jpg, .jpeg'
								/>
								<label htmlFor='imageUpload'></label>
							</div>
							<div className='avatar-preview'>
								<div
									id='imagePreview'
									style={{
										backgroundImage: `url(${img})`,
									}}
								></div>
							</div>
						</div>
					</div>
					<div className='details'>
						<div className='name'>{profile.name}</div>

						<div className='username'>{profile.username}</div>
						<div className='profile-about'>{profile.about}</div>
						<div className='profile-address'>{profile.address}</div>
						<div className='number'>{profile.phoneno}</div>
						<div className='number'>{profile.email}</div>
					</div>
				</div>
				<div className='profile-details'>
					<div className='name'>Hi ! This is {profile.name}</div>
					<div className='details-input'>
						<input
							placeholder={profile.name}
							onChange={e =>
								setprofile({ ...profile, name: e.target.value })
							}
							className='name-input'
						></input>

						<input
							placeholder={profile.username}
							onChange={e =>
								setprofile({
									...profile,
									username: e.target.value,
								})
							}
							className='username-input'
						></input>
						<input
							placeholder='password'
							type='password'
							onChange={e =>
								setprofile({
									...profile,
									password: e.target.value,
								})
							}
							className='profile-about-input'
						></input>
						{/* <input
							placeholder='Confirm password'
							type='password'
							onChange={e=>setprofile({...profile , name:e.target.value})}
							className='profile-about-input'
						></input> */}
						<input
							placeholder={profile.about}
							onChange={e =>
								setprofile({
									...profile,
									about: e.target.value,
								})
							}
							className='profile-about-input'
						></input>
						<input
							placeholder={profile.address}
							onChange={e =>
								setprofile({
									...profile,
									address: e.target.value,
								})
							}
							className='profile-addressinput'
						></input>
						<input
							placeholder={profile.phoneno}
							onChange={e =>
								setprofile({
									...profile,
									phoneno: e.target.value,
								})
							}
							className='number-input'
						></input>
					</div>
					<h3 className='edit'>
						<button onClick={confirmChanges}>Confirm Edit</button>
					</h3>
				</div>
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
