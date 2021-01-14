import React, { useState } from "react"
import Navbar from "../Navbar"
import "./Upload.css"
import axios from "axios"

export default function Upload(props) {
	const [file, setFile] = useState()
	const [details, setDetails] = useState({
		item_name: "",
		item_type: "",
		item_description: "",
		expected_exchange: "",
		submit: "Submit",
	})

	const addDetails = e => {
		e.preventDefault()

		const data = new FormData()
		data.append("item_name", details.item_name)
		data.append("item_type", details.item_type)
		data.append("item_description", details.item_name)
		data.append("expected_exchange", details.expected_exchange)
		data.append("file", file)
		axios({
			method: "POST",
			data: data,
			url: "http://localhost:7000/upload/",
		})
			// .then(res => console.log(res))
			.then(res => handleData(res))
			.catch(err => console.log(err))

		// console.log(details)
		// console.log(file)
	}

	let img
	const handleData = data => {
		if (data.status !== 200) {
			console.log(data)
		} else img = data.path
		// props.history.push({
		// 	pathname: "/home",
		// 	response: { response: data },
		// })
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
		</>
	)
}
