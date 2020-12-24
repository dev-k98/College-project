import React, { useEffect, useState, useRef } from "react"
import "../Styles/post.css"

import book1 from "../Images/img3.jpeg"
import next from "../Images/arrow-point-to-right.svg"
import book2 from "../Images/download.png"
import book3 from "../Images/img2.jpeg"
import CreateCards from "./CreateCards"

let init = [
	{
		image: book1,
		descr: "The Alchemist",
		exch: "Book/game",
	},
]

let objects = [
	{
		image: book2,
		descr: "Harry Potter",
		exch: "Book/game",
	},
	{
		image: book3,
		descr: "The Alchemist",
		exch: "Book/game",
	},
	{
		image: book1,
		descr: "Harry Potter",
		exch: "Book/game",
	},
	{
		image: book1,
		descr: "The Alchemist",
		exch: "Book/game",
	},
	{
		image: book3,
		descr: "Harry Potter",
		exch: "Book/game",
	},
	{
		image: book2,
		descr: "The Alchemist",
		exch: "Book/game",
	},
	{
		image: book1,
		descr: "Harry Potter",
		exch: "Book/game",
	},
	{
		image: book2,
		descr: "The Alchemist",
		exch: "Book/game",
	},
]

export default function PostFirst() {
	const [postData, setPostData] = useState(init)
	const [card, setCard] = useState(0)
	const container = useRef()
	useEffect(() => {
		container.current.style.transform = `translateX(${
			(-container.current.clientWidth / 2) * card
		}px)`

		setPostData([...init, ...objects])
	}, [card])

	const nextpost = () => {
		if (card < 3) {
			container.current.style.transition = "1s all ease"
			setCard(card + 1)
		} else {
			return
		}
	}
	const prevpost = () => {
		if (card > 0) {
			container.current.style.transition = "1s all ease"
			setCard(card - 1)
		} else {
			return
		}
	}

	return (
		<>
			<h1 className='title-bar'>New items</h1>
			<div className='posts'>
				<button className='btn prev' onClick={nextpost}>
					<img src={next} alt='' />
				</button>
				<button className='btn next' onClick={prevpost}>
					<img src={next} alt='' />
				</button>
				<div className='container'>
					<div ref={container} className='post-container'>
						<CreateCards details={postData} className='card-flow' />
					</div>
				</div>
			</div>
		</>
	)
}
