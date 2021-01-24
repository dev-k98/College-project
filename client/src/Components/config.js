import axios from "axios"

axios.defaults.withCredentials = true

let data = {}
const config = async () => {
	await axios({
		method: "GET",
		url: "http://localhost:7000/users/login",
	}).then(res => (data = res.data))
	return data
}
export default config()
