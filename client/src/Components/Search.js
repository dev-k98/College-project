import axios from "axios"
import React, { useEffect, useState } from "react"
import CreateCards from "./CreateCards"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Search(props) {
	const [vis, setvis] = useState(false)
	const [data, setdata] = useState()
	useEffect(() => {
		axios({
			method: "GET",
			url: `http://localhost:7000/item/find/${props.match.params.type}`,
		}).then(res => setdata(res.data))
	}, [vis, props.match.params.type])

	if (!vis) setvis(!vis)
	return (
		<div>
			<Navbar />
			{data.length ? (
				<div className='container'>
					<div className='post-container'>
						<CreateCards details={data} className='card-flow' />
					</div>
				</div>
			) : (
				<h1 className='user-name'>Nothing Found...</h1>
			)}
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
		</div>
	)
}
