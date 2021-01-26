import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import config from "./config"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../Styles/help.css"

export default function Help() {
	const [vis, setvis] = useState(false)
	const [send, setsend] = useState(false)
	const [user, setuser] = useState()
	const [report, setReport] = useState({
		username: "",
		email: "",
		report_about: "",
		description: "",
	})

	useEffect(() => {
		config.then(res => setuser(res.user))
	}, [vis])

	const sendReport = async () => {
		await setReport({
			...report,
			username: user.name,
			email: user.email,
		})

		setsend(true)
	}

	const confirmReport = async () => {
		await axios({
			method: "POST",
			data: report,
			url: "http://localhost:7000/report",
		}).then(res => console.log(res))
	}

	if (!vis) setvis(!vis)
	return (
		<div>
			<Navbar />
			<div className='report-outer-cont'>
				<div className='report-cont'>
					{user ? (
						<>
							<h1 className='report-username'>Report/Help</h1>
							<label>Subject</label>
							<input
								className='subject'
								onChange={e =>
									setReport({
										...report,
										report_about: e.target.value,
									})
								}
							></input>
							<label>Description</label>
							<input
								className='disc'
								onChange={e =>
									setReport({
										...report,
										description: e.target.value,
									})
								}
							></input>
							{!send ? (
								<button
									className='report-button'
									onClick={sendReport}
								>
									Report
								</button>
							) : (
								<button
									className='report-button'
									onClick={confirmReport}
								>
									confirm Report
								</button>
							)}
						</>
					) : (
						<h1 className='report-username'>
							You are not logged in...
							<Link to='/login'>
								<h1 className='subject'>login</h1>
							</Link>
						</h1>
					)}
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
		</div>
	)
}
