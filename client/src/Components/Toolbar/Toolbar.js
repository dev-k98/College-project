import React from "react"
import "../../Styles/Toolbar.css"

export default function Toolbar() {
	return (
		<div className='toolbar'>
			<ul className='cata'>
				<li className='ent toolelem'>Entertainment</li>
				<li className='needs toolelem'>Daily Needs</li>
				<li className='services toolelem'>Services</li>
				<li className='Commerce toolelem'>Commercial</li>
			</ul>
		</div>
	)
}
