import React from "react"
import Navbar from "../Navbar"
import "./inbox.css"

export default function Inbox() {
	return (
		<div>
			<Navbar />
			<div className='inbox-main'>
				<div className='contacts'>contacts/deals</div>
				<div className='chat-box'>
					chat box
					<ul className='chat'>
						<li>chat</li>
						<li>chat</li>
						<li>chat</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
