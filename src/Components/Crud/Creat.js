import React, { useState } from 'react'
import axios from 'axios';

const Creat = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [checkbox, setCheckbox] = useState(false);

    const setData = (e) => {
        e.preventDefault();
        axios.post("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData", {
            firstName,
            lastName,
            checkbox,
        })

    }

    return (

        <form onSubmit={setData} className="flex flex-col max-w-[450px] mx-auto my-8 rounded-6 items-start bg-black text-white justify-center items-center gap-4 py-20">
            <div className="flex flex-col items-start">
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} name="first-name" placeholder="First Name" className='text-black p-1 outline-none' />
            </div>
            <div className="flex flex-col items-start">
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} name="last-name" placeholder="Last Name" className='text-black p-1 outline-none' />
            </div>
            <div className="flex flex-col items-start">
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} name="last-name" placeholder="Last Name" className='text-black p-1 outline-none' />
            </div>
            <div className="flex flex-col items-start">
                <label>Password</label>
                <input type="password" onChange={(e) => setpassword(e.target.value)} name="last-name" placeholder="Last Name" className='text-black p-1 outline-none' />
            </div>
            <button className="border py-1 px-6" type="submit">Submit
            </button>
        </form>


    )
}

export default Creat
