import React, { useEffect, useRef, useState } from "react"
import "../Styles/scroller.css"

//this are the images
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpeg"
import img3 from "../Images/img3.jpeg"
import img4 from "../Images/img4.jpeg"
import img5 from "../Images/img5.jpeg"

import iconfor from "../Images/arrow-point-to-right.svg"
import iconback from "../Images/left-arrow.svg"

export default function Scroller() {
	//download images from the web store in this array
	const src = [img1, img2, img3, img4, img5]

	const [card, setCard] = useState(1)
	const Scrollerslider = useRef()

	let size
	//using hook for increasing the count of cards
	useEffect(() => {
		Scrollerslider.current.style.transform = `translateX(${
			-Scrollerslider.current.clientWidth * card
		}px)`
	}, [card, size])

	const nextImg = () => {
		if (card <= 5) {
			Scrollerslider.current.style.transition = ".1s all ease"
			setCard(card + 1)
		}
		if (card === 5) {
			setTimeout(() => {
				Scrollerslider.current.style.transition = "none"
				setCard(1)
			}, 100)
			// Scrollerslider.current.style.transition = "1s all ease"
			// setCard(6)
		}
	}
	const prevImg = () => {
		if (card > 0) {
			Scrollerslider.current.style.transition = ".1s all ease"
			setCard(card - 1)
		}
		if (card === 1) {
			setTimeout(() => {
				Scrollerslider.current.style.transition = "none"
				setCard(5)
			}, 100)
		} else return
	}

	return (
		<>
			<div className='Scroller-cont'>
				<button className='backword' onClick={prevImg}>
					<img src={iconback} alt=''></img>
				</button>
				<button className='forword' onClick={nextImg}>
					<img src={iconfor} alt=''></img>
				</button>
				<div ref={Scrollerslider} className='Scrollerslider'>
					<img src={img5} key={4} id='first' alt='' />
					{src.map((src, index) => {
						return <img src={src} key={index} alt='' />
					})}
					<img src={img1} key={0} id='last' alt='' />
				</div>
			</div>
		</>
	)
}
