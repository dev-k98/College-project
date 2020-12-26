import React from "react"
import "../../Styles/options.css"
import { Link } from "react-router-dom"

export default function Options() {
	return (
		<div className='options'>
			<Link to='/upload'>
				<button className='Upload opt-bt'>Upload</button>
			</Link>
			<button className='message opt-bt'>Message</button>
			<button className='deal-cart opt-bt'>Deal/Cart</button>
		</div>
	)
}
