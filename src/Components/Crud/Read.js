import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Read = () => {
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
        let { id, firstName, lastName, email, password } = shows;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);

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
        <>
            <div className=" mb-10">
                <h1 className='text-[36px] text-center py-4'>Crud Application</h1>
                <div className="container mx-auto">
                    <table className='table-auto border border-slate-400  w-full mx-auto text-center'>
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
                                        {shows.firstName}
                                    </td>
                                    <td className='border border-slate-400'>
                                        {shows.lastName}
                                    </td>
                                    <td className='border border-slate-400'>
                                        {shows.checkbox ? 'checked' : 'uncheked'}
                                    </td>
                                    <td className='border border-slate-400'>
                                        <Link onClick={() => setData(shows)} >Update</Link> / &nbsp;
                                        <Link onClick={() => onDelete(shows.id)} >Delete</Link>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Read
