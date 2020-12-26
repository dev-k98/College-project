import React from "react"

import Navbar from "../Navbar"
import Options from "../options/Options"
import PostFirst from "../PostFirst"
import SecondPost from "../SecondPost"
import Scroller from "../Scroller"
import Toolbar from "../Toolbar/Toolbar"

export default function Home() {
	return (
		<>
			<header className='header'>
				<Navbar />
				<Toolbar />
				<Options />
			</header>
			<Scroller />
			<PostFirst />
			<SecondPost />
		</>
	)
}
