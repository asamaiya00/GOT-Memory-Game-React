import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState({ data: [] })
    const [form, setform] = useState({ name: "", job: "" });
    const [info, setInfo] = useState([])


    useEffect(() => {
        async function getUsers() {
            const { data } = await Axios.get("https://reqres.in/api/users")
            console.log(data);
            setUsers(data)
        }
        getUsers()

    }, [])



    function handleChange(e) {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    function handleForm(e) {
        e.preventDefault();
        Axios.post("https://reqres.in/api/users", form)
            .then((res) => {
                setInfo([...info, res.data])
                
            }).catch(err => {
                console.log(err)
            })

    }

    const deleteInfo = (idx) => {
        setInfo(info.filter((u) => u.id !== idx))
    }

    return (
        <div>
            {users.data.map((user) => (
                <section key={user.id}>
                    <div className="flex justify-center">
                        <p className="mx-2 text-2xl" >{user.first_name}</p>
                        <p className="mx-2 text-2xl " >{user.email}</p>
                    </div>
                </section>
            ))}

            {info.map((u) => (
                <div key={u.id} className="flex my-2 justify-center">
                    <p className="mx-2 text-blue-700 text-2xl" >{u.name}</p>
                    <p className="mx-2 text-blue-700 text-2xl" >{u.job}</p>
                    <button className="danger p-1 rounded bg-red-600" onClick={() => { deleteInfo(u.id) }} > Delete</button>
                </div>
            )
            )}
            <form className=" flex my-10 justify-center bg-gray-200 rounded shadow " onSubmit={handleForm}>
                <div className="my-5 p-2 flex justify-center">
                    <input
                        type="name"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 border border-gray-800 my-4"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="my-5 p-2 flex justify-center">
                    <input
                        type="job"
                        name="job"
                        placeholder="Enter your job"
                        className="p-2 border border-gray-800 my-4"
                        value={form.job}
                        onChange={handleChange}

                    />
                </div>
                <div className="flex justify-center">
                    <button className={`w-32 mt-10 h-10 text-white bg-orange-500`} > Add</button>
                </div>
            </form>
        </div>
    )
}

export default Users;
