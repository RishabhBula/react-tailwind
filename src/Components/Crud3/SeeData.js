
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const SeeData = () => {

    const [show, setShow] = useState();

    useEffect(() => {
        fetch("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData").then(respo => {
            respo.json().then(result => {
                // console.log(result)
                setShow(result)
            })
        })

    }, [])
    const setData = (shows) => {
        let { id, name, lastname, email, password } = shows;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
    const onDelete = (id) => {
        axios.delete(`https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData/${id}`).then(() => {
            setData();
        })
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl text-center mb-3'>Update - Delete Data</h2>
            <table className='table-auto border border-slate-400  w-full mx-auto text-center mb-20'>
                <thead>
                    <tr className='border border-slate-400'>
                        <th className='border border-slate-400'>
                            Sr. No.
                        </th>
                        <th className='border border-slate-400'>
                            Name
                        </th>
                        <th className='border border-slate-400'>
                            Last Name
                        </th>
                        <th className='border border-slate-400'>
                            Email
                        </th>
                        <th className='border border-slate-400'>
                            Password
                        </th>
                        <th className='border border-slate-400'>
                            Update / Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {show?.map((shows, j) =>
                        <tr key={j} className='border border-slate-400'>
                            <td className='border border-slate-400'>
                                {shows.id}
                            </td>
                            <td className='border border-slate-400'>
                                {shows.name}
                            </td>
                            <td className='border border-slate-400'>
                                {shows.lastname}
                            </td>
                            <td className='border border-slate-400'>
                                {shows.email}
                            </td>
                            <td className='border border-slate-400'>
                                {shows.password}
                            </td>

                            <td className='border border-slate-400'>
                                <Link onClick={() => setData(shows)} to="/updatedata" >Update</Link> / &nbsp;
                                <Link onClick={() => onDelete(shows.id)} >Delete</Link>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default SeeData