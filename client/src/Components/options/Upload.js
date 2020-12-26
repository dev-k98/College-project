import React, { useState } from "react"
import Navbar from "../Navbar"
import axios from "axios"

export default function Upload() {
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
		console.log(details)
		axios({
			method: "POST",
			data: data,
			url: "http://localhost:7000/upload/",
		})
			.then(res => console.log(res))
			.catch(err => console.log(err))

		// console.log(details)
		// console.log(file)
	}

	return (
		<>
			<Navbar />
			<div className='upload-container'>
				<form onSubmit={addDetails}>
					<input
						type='text'
						onChange={e =>
							setDetails({
								...details,
								item_name: e.target.value,
							})
						}
					></input>
					<input
						type='text'
						onChange={e =>
							setDetails({
								...details,
								item_type: e.target.value,
							})
						}
					></input>
					<input
						type='text'
						onChange={e =>
							setDetails({
								...details,
								item_description: e.target.value,
							})
						}
					></input>
					<input
						type='text'
						onChange={e =>
							setDetails({
								...details,
								expected_exchange: e.target.value,
							})
						}
					></input>
					<input
						type='file'
						accept='.jpg'
						onChange={e => {
							const image = e.target.files[0]
							setFile(image)
						}}
					></input>
					<button type='submit'>button</button>
				</form>
			</div>
		</>
	)
}
