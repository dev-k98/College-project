import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import img from "../../Images/profile.svg"
import Footer from "../Footer"
import "./Edit.css"

export default function Edit(props) {
	const [vis, setvis] = useState(false)
	const [submit, setSubmit] = useState(false)
	const [profile, setprofile] = useState({})
	const [style, setstyle] = useState()
	const [stylenum, setstylenum] = useState()

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
		if (submit)
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

	const checkPass = data => {
		if (profile.password !== data) setstyle("wrong")
		else {
			setstyle("")
			setSubmit(true)
		}
	}
	const phoneCheck = data => {
		// console.log(umber.parseInt(data))
		let num = Number.parseInt(data)
		console.log(typeof num)
		if (num < 999999999 || num > 9999999999 || isNaN(num))
			setstylenum("wrong")
		else {
			setprofile({ ...profile, phoneno: data })
			setstylenum("")
			setSubmit(true)
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
							className='password-input'
						></input>
						<input
							placeholder='Confirm password'
							type='password'
							onChange={e => checkPass(e.target.value)}
							className={`password-input ${style}`}
						></input>
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
							onChange={e => phoneCheck(e.target.value)}
							className={`number-input ${stylenum}`}
						></input>
					</div>

					<button className='edit' onClick={confirmChanges}>
						Confirm Edit
					</button>
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
