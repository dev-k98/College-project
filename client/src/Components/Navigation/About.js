import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "./About.css"

import tashi from "../../Images/tashi.jpg"
import vanshika from "../../Images/Vanshika.jpg"
import rashi from "../../Images/Rashi.jpg"
import dev from "../../Images/dev.jpeg"

export default function About() {
	return (
		<div>
			<Navbar />
			<div className='outer-cont'>
				<h1 className='mission'>Our Mission</h1>
				<div className='our-mission'>
					<p>
						To boost economy and support small buisness also
						catering needs of all individuals.It also eliminates tHe
						deadlock caused by lash of money.
						<br />
						It is a very old policy of helping others and uniting
						with out communty.
						<br />
						It encourages symbiotic economy and mutual harmony.
					</p>
				</div>
			</div>
			<div className='outer-team'>
				<h1 className='our-team'>Meet Our Squard</h1>
				<div className='mem-details'>
					<div className='photo-cont'>
						<div className='prophoto'>
							<img src={tashi} alt='Tashi'></img>
						</div>
						<div className='bubble'>
							<p>
								<h2>Hi! I am Tashi</h2>I front-end designer and
								content writer.
							</p>
						</div>
					</div>
					<div className='photo-cont'>
						<div className='prophoto'>
							<img src={rashi} alt='Vanshika'></img>
						</div>
						<div className='bubble'>
							<p>
								<h2>Hi! I am Rashi</h2>I am the designer and
								backend developer.
							</p>
						</div>
					</div>
					<div className='photo-cont'>
						<div className='prophoto'>
							<img src={vanshika} alt='Vanshika'></img>
						</div>
						<div className='bubble'>
							<p>
								<h2>Hi! I am Vanshika</h2>I am the designer and
								backend developer.
							</p>
						</div>
					</div>
					<div className='photo-cont'>
						<div className='prophoto'>
							<img src={dev} alt='Dev'></img>
						</div>
						<div className='bubble'>
							<p>
								<h2>Hi! I am Dev</h2>I created the Front end for
								the project and a bit contributed in backend.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					bottom: 0,
					width: "100%",
					"background-color": "black",
					color: "white",
					"text-align": "center",
				}}
			>
				<Footer />
			</div>
		</div>
	)
}
