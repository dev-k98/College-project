import axios from "axios"
import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../Styles/PostDetail.css"

export default function Post(props) {
	console.log()
	const [vis, setvis] = useState(false)
	const [post, setPost] = useState()
	const [user, setuser] = useState()
	const [cls, setcls] = useState("hide")

	useEffect(() => {
		fetchData()
	}, [vis])

	const fecthUser = () => {
		axios({
			method: "GET",
			url: `http://localhost:7000/users/${post.user_email}`,
		}).then(res => {
			setuser(res.data[0])
			setcls("contact-details")
		})
	}

	const setclass = () => {
		setcls("hide")
	}

	const fetchData = () => {
		axios({
			method: "GET",
			url: `http://localhost:7000/item/${props.match.params.id}`,
		}).then(res => setPost(res.data))
	}
	if (!vis) setvis(!vis)
	return (
		<div>
			<Navbar />
			{user ? (
				<div className={cls}>
					<div className='contacts-main'>
						<button onClick={setclass} className='cross'>
							+
						</button>
						<div className='contact'>
							<h1 className='user-name'>{user.name}</h1>
							<h3 className='cont-number'>{user.phoneno}</h3>
							<h3 className='cont-email'>{user.email}</h3>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{post ? (
				<>
					<div className='post-main'>
						<div className='post-photo'>
							<img className='post-photo' src={"#"} alt='DP' />
						</div>
						<div className='post-details'>
							<h1>
								<span>Name</span>
							</h1>
							<div className='item-desc'>{post.item_name}</div>
							<h2>
								<span>Type</span>
							</h2>
							<div className='item-type'>{post.item_type}</div>
							<h2>
								<span>Upload date</span>
							</h2>
							<div className='item-date'>
								{post.post_date.substring(0, 10)}
							</div>
							<h2>
								<span>description</span>
							</h2>
							<div className='item-date'>
								{post.item_description}
							</div>
							<h2>
								<span>Expectations</span>
							</h2>
							<div className='item-expexc'>
								{post.expected_exchange}
							</div>
							<h2>
								<span>Location</span>
							</h2>
							<div className='item-loc'>{post.item_location}</div>
							<button onClick={fecthUser} className='contact-msg'>
								Contact
							</button>
						</div>
					</div>
				</>
			) : (
				<></>
			)}

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
		</div>
	)
}
