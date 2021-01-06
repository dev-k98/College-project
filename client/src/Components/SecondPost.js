import React, { useEffect, useState, useRef } from "react"
import "../Styles/post.css"
import axios from "axios"

import next from "../Images/arrow-point-to-right.svg"
import CreateCards from "./CreateCards"

export default function PostFirst() {
	const [itemData, setitemData] = useState([])
	const [card, setCard] = useState(0)
	const container = useRef()

	const [vis, setvis] = useState(false)

	useEffect(() => {
		container.current.style.transform = `translateX(${
			(-container.current.clientWidth / 2) * card
		}px)`

		if (!vis) fetchItems()
	}, [card, vis])

	const fetchItems = () => {
		axios({
			method: "GET",
			url: "http://localhost:7000/item/",
		})
			.then(res => storeItems(res))
			.catch(err => console.log(err))
		setvis(!vis)
	}

	const storeItems = data => {
		setitemData(data.data)
		for (let i = 0; i < data.data.length; i++) {}
	}

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
			<h1 className='title-bar'>Featured post</h1>
			<div className='posts'>
				<button className='btn prev' onClick={nextpost}>
					<img src={next} alt='' />
				</button>
				<button className='btn next' onClick={prevpost}>
					<img src={next} alt='' />
				</button>
				<div className='container'>
					<div ref={container} className='post-container'>
						<CreateCards details={itemData} className='card-flow' />
					</div>
				</div>
			</div>
		</>
	)
}
