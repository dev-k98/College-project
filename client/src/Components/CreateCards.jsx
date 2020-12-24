import React from "react"
// import "../Styles/post.css"

export default function CreateCards({ details }) {
	// console.log(props)
	return (
		<>
			{details.map((item, index) => {
				return (
					<div className='main-container' key={index}>
						<div className='card'>
							<div className='image'>
								<img src={item.image} alt='' />
							</div>
							<div className='info'>
								<h2>{item.descr}</h2>
								<h2>{item.exch}</h2>

								<div className='buttons'>
									<button type='button'>message</button>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
