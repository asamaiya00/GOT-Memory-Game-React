
import React, { useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Cookies from "js-cookie"
function Login({ history }) {
	const [form, setform] = React.useState({ email: "", password: "" });

	const [isLoading, setIsLoading] = useState(false)

	const [error, setError] = useState("")

	function handleChange(e) {
		setform({ ...form, [e.target.name]: e.target.value });
	}
    
    function handleForm(e) {
		e.preventDefault();
		setError("")
		setIsLoading(true)
		axios.post("https://reqres.in/api/login?delay=1", form)
			.then((res) => {
				localStorage.setItem("token", res.data.token)
				console.log(res.data.token);
				Cookies.set("token", res.data.token)
				history.push("/")
			}).catch(err => {
				console.log(err.response.data.error)
				setError(false)
			})
	}

	return (
		<div className="my-10 flex justify-center py-10">
			<form className="w-1/2 bg-gray-200 rounded shadow py-20" onSubmit={handleForm}>
				<h1 className="text-3xl flex justify-center" >Login Here</h1>
				<p className="my-5 flex justify-center text-red-700 text-xs" >{error} </p>
				<div className="my-5 flex justify-center">
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						className="p-2 border border-gray-800 my-4"
						value={form.email}
						onChange={handleChange}
					/>
				</div>
				<div className="my-5 flex justify-center">
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						className="p-2 border border-gray-800 my-4"
						onChange={handleChange}
						value={form.password}
					/>
				</div>
				<div className="flex justify-center">
					<button className={`w-64 text-white p-2  ${isLoading?"bg-blue-400":"bg-blue-700"} `} disabled={isLoading} >{isLoading ?
						(<i className="fas fa-circle-notch fa-spin" > </i>)
						: ("Login")}</button>
				</div>
			</form>
		</div>
	);
}

export default withRouter(Login);
