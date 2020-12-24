import React from "react"
import "../../Styles/Toolbar.css"

import search from "../../Images/search.png"

export default function Toolbar() {
	return (
		<div className='toolbar'>
			<ul className='cata'>
				<li className='ent toolelem'>Entertainment</li>
				<li className='needs toolelem'>Daily Needs</li>
				<li className='services toolelem'>Services</li>
				<li className='Commerce toolelem'>Commercial</li>
			</ul>
			<div className='search-section'>
				<input className='search' placeholder='Search...'></input>
				<button className='search-button'>
					<img src={search} alt='search' />
				</button>
			</div>
		</div>
	)
}
