import axios from "axios"
import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../Styles/PostDetail.css"
import config from "./config"

export default function Post(props) {
	console.log()
	const [vis, setvis] = useState(false)
	const [post, setPost] = useState()
	const [user, setuser] = useState()
	const [del, setdel] = useState()
	const [logger, setlogger] = useState()
	const [cls, setcls] = useState("hide")

	useEffect(() => {
		fetchData()
		config.then(res => setlogger(res.user))
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
	const deleteConfirm = () => {
		console.log(post._id)
		axios({
			method: "POST",
			data: { id: post._id },
			url: `http://localhost:7000/item/remove`,
		}).then(res => props.history.push("/"))
	}

	const deletePost = () => {
		setdel(true)
		setcls("contact-details")
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
			) : null}
			{del ? (
				<div className={cls}>
					<div className='contacts-main'>
						<button onClick={setclass} className='cross'>
							+
						</button>
						<div className='contact'>
							<h1 className='user-name'>Remove Post</h1>
							<h3 className='cont-number'>{post.item_name}</h3>
							<button
								onClick={deleteConfirm}
								className='contact-msg'
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			) : null}
			{post ? (
				<>
					<div className='post-main'>
						<div className='post-photo'>
							<img
								className='post-photo'
								src={`./Upload/${post.images}`}
								alt='DP'
							/>
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
							{vis ? (
								logger.email === post.user_email ? (
									<button
										onClick={deletePost}
										className='contact-msg'
									>
										Remove
									</button>
								) : (
									<button
										onClick={fecthUser}
										className='contact-msg'
									>
										Contact
									</button>
								)
							) : null}
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
