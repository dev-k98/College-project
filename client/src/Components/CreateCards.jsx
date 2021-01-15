import React from "react"
import { Link } from "react-router-dom"
// import "../Styles/post.css"

export default function CreateCards({ details }) {
	// console.log(props)
	return (
		<>
			{details.map((item, index) => {
				return (
					<div className='main-container' key={index}>
						<Link
							to={{
								pathname: `/post/${item._id}`,
								state: {
									fromNotifications: true,
								},
							}}
							details={item}
						>
							<div className='card'>
								<div className='image'>
									<img src='#' alt='' />
								</div>
								<div className='info'>
									<h2>{item.item_name}</h2>
									<h2>{item.item_type}</h2>
									<h2>{item.item_location}</h2>

									<div className='buttons'>
										<button type='button'>message</button>
									</div>
								</div>
							</div>
						</Link>
					</div>
				)
			})}
		</>
	)
}
