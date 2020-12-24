import React from "react"
import "../Styles/Dropdown.css"
import { Link } from "react-router-dom"
import { Dropmenu } from "./DropMenu"

export default function Dropdown() {
	return (
		<div className='dropdown'>
			{Dropmenu.map((items, index) => {
				return (
					<Link to={items.link}>
						<li key={index} className={`${items.class} prtag`}>
							{items.title}
						</li>
					</Link>
				)
			})}
		</div>
	)
}
