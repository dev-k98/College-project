import React, { useEffect, useState } from "react"
import Navbar from "../Navbar"
import "./Upload.css"
import axios from "axios"
import config from "../config"
import Footer from "../Footer"

export default function Upload(props) {
	const [file, setFile] = useState()
	const [vis, setvis] = useState(false)
	const [user, setuser] = useState()
	const [details, setDetails] = useState({
		item_name: "",
		item_type: "",
		user_email: "",
		item_location: "",
		item_description: "",
		expected_exchange: "",
		submit: "Submit",
	})

	useEffect(() => {
		config.then(res => setuser(res.user))
	}, [vis])

	if (!vis) setvis(!vis)

	const addDetails = e => {
		e.preventDefault()

		const data = new FormData()
		data.append("item_name", details.item_name.toLowerCase())
		data.append("item_type", details.item_type.toLowerCase())
		data.append("user_email", user.email)
		data.append("item_location", details.item_location.toLowerCase())
		data.append("item_description", details.item_description)
		data.append("expected_exchange", details.expected_exchange)
		data.append("file", file)

		axios({
			method: "POST",
			data: data,
			headers: {
				"content-type": "multipart/form-data",
			},
			url: "http://localhost:7000/upload/",
		})
			.then(res => handleData(res))
			.catch(err => console.log(err))
	}

	const handleData = data => {
		if (data.status !== 200) {
			console.log(data)
		} else props.history.push("/")
	}

	return (
		<>
			<Navbar />
			<div className='upload-container loginform'>
				<form className='log-cont' onSubmit={addDetails}>
					<label className='lables'>Product Name</label>
					<input
						type='text'
						className='upload inpcmpt'
						onChange={e =>
							setDetails({
								...details,
								item_name: e.target.value,
							})
						}
					></input>
					<label className='lables'>Product type</label>
					<input
						type='text'
						className='upload inpcmpt'
						onChange={e =>
							setDetails({
								...details,
								item_type: e.target.value,
							})
						}
					></input>
					<label className='lables'>Product location</label>
					<input
						type='text'
						className='upload inpcmpt'
						onChange={e =>
							setDetails({
								...details,
								item_location: e.target.value,
							})
						}
					></input>
					<label className='lables'>Description</label>
					<input
						type='text'
						className='upload inpcmpt'
						onChange={e =>
							setDetails({
								...details,
								item_description: e.target.value,
							})
						}
					></input>
					<label className='lables'>Expecated Exchange</label>
					<input
						type='text'
						className='fileupload inpcmpt'
						onChange={e =>
							setDetails({
								...details,
								expected_exchange: e.target.value,
							})
						}
					></input>
					<label className='lables'>Product Photos</label>
					<input
						type='file'
						name='file'
						className='upload inpcmpt'
						onChange={e => {
							const image = e.target.files[0]
							setFile(image)
						}}
					></input>
					<button className='btnlogin' type='submit'>
						Upload
					</button>
				</form>
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
