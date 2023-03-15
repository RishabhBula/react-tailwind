import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const setData = (e) => {
        e.preventDefault();
        axios.post("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData", {
            firstName,
            lastName,
            email,
            password
        })

    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));

    }, []);

    const updateAPIData = () => {
        axios.put(`https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData/${id}`, {
            firstName,
            lastName,
            email,
            password

        })
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }


    return (
        <div>
            <form onSubmit={setData} className="flex flex-col max-w-[450px] mx-auto my-8 rounded-6 items-start bg-black text-white justify-center items-center gap-4 py-20">
                <div className="flex flex-col items-start">
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="first-name" placeholder="First Name" className='text-black p-1 outline-none' />
                </div>
                <div className="flex flex-col items-start">
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="last-name" placeholder="Last Name" className='text-black p-1 outline-none' />
                </div>
                <div className="flex flex-col items-start">

                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className='text-black p-1 outline-none' />


                </div>
                <div className="flex flex-col items-start">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" className='text-black p-1 outline-none' />

                </div>
                <Link onClick={updateAPIData} to="/service" className="border py-1 px-6" type="submit">Update</Link>
            </form>

        </div>
    )
}

export default Update
