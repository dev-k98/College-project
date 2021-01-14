import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Post(props) {
	console.log()
	const [vis, setvis] = useState(false)

	useEffect(() => {
		fetchData()
	}, [vis])
	const fetchData = () => {
		axios({
			method: "GET",
			url: `http://localhost:7000/item/${props.match.params.id}`,
		}).then(res => console.log(res.data))
	}

	if (!vis) setvis(!vis)
	return <div>Post</div>
}
