import React from 'react'
import axios from 'axios';

export default function Login() {
    const [form, setform] = React.useState({ email: "", password: "" });

    function handleChange(e) {
      setform({ ...form, [e.target.name]: e.target.value });
    }
  
    function handleForm(e) {
        axios.post("https://reqres.in/api/login")
        .then((res)=>{
            console.log(res);
            
        })
      e.preventDefault();
    }
  
    return (
      <div className="my-10 flex justify-center">
        <form className="w-1/2 bg-gray-200 rounded shadow" onSubmit={handleForm}>
          <h1 className="text-3xl">Login Here</h1>
          <div className="my-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-800 my-4"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-2 border border-gray-800 my-4"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <button className="w-64 text-white p-2 bg-green-600">Login</button>
        </form>
      </div>
    );
}
