import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const setData = (e) => {
        e.preventDefault();
        axios.post("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/TeamXi", {
            firstName,
            lastName,
            checkbox,
        })

    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/TeamXi/${id}`, {
            firstName,
            lastName,
            checkbox
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
                    <div className="ui checkbox">
                        <input type="checkbox" checked={checkbox ? "checked" : "unchecked"} onChange={(e) => setCheckbox(!checkbox)} tabIndex="0" className='text-black p-1 outline-none' />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <Link onClick={updateAPIData} to="/service" className="border py-1 px-6" type="submit">Update</Link>
            </form>

        </div>
    )
}

export default Update
