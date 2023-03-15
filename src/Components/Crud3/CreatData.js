import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ValidationSchema } from "./ValidationSchema"

const initialValues = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
}

const CreatData = () => {
    const [show, setShow] = useState()

    // Form validation

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit(values, action) {
            // e.preventDefault()
            handleSubmitData(values)
            console.log(values);
            action.resetForm()
        }
    })

    // Form Data Send

    const handleSubmitData = (e) => {
        const formData = new FormData()
        formData.append("name", "e.name")
        formData.append("lastname", "e.last_name")
        formData.append("email", "e.email")
        formData.append("password", "e.password")
        const myData = {
            name: e.name,
            lastname: e.last_name,
            email: e.email,
            password: e.password,
        }
        axios.post("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData", myData)

    }

    // for show data in ui use fetch api method

    useEffect(() => {
        fetch("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/MyData").then(resp => {
            resp.json().then(result => {
                setShow(result)
            })
        })
    },
        [])

    return (
        <>
            <form onSubmit={handleSubmit} className='p-3 w-[600px] bg-[#309060] mx-auto mt-10 mb-10 '>
                <div className='flex gap-4'>
                    <div className='flex flex-col items-start gap-3 mb-2 flex-1'>
                        <label htmlFor='name' >Name</label>
                        <input type="text" placeholder='Enter Your Name' className='p-2 outline-none w-full'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="name"
                            id="name"
                        />
                        {
                            errors.name && touched.name ? (
                                <span >{errors.name}</span>
                            ) : ""
                        }
                    </div>
                    <div className='flex flex-col items-start gap-3 mb-2 flex-1'>
                        <label htmlFor='last_name' >Last Name</label>
                        <input type="text" placeholder='Enter Your Last Name' className='p-2 outline-none w-full'
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="last_name"
                            id="last_name"
                        />
                        {
                            errors.last_name && touched.last_name ? (
                                <span>{errors.last_name}</span>
                            ) : ""
                        }
                    </div>
                </div>
                <div className='flex flex-col items-start gap-3 mb-2 w-full'>
                    <label htmlFor='email' >Email</label>
                    <input type="email" placeholder='Enter Your Email' className='w-full p-2 outline-none w-full'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        id="email"
                    />
                    {
                        errors.email && touched.email ? (
                            <span>{errors.email}</span>
                        ) : ""
                    }
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col items-start gap-3 mb-2 flex-1'>
                        <label htmlFor='password' >Password</label>
                        <input type="password" placeholder='Enter Your Password' className='p-2 outline-none w-full'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="password"
                            id="password"
                        />
                        {
                            errors.password && touched.password ? (
                                <span>{errors.password}</span>
                            ) : ""
                        }
                    </div>
                    <div className='flex flex-col items-start gap-3 mb-2 flex-1'>
                        <label htmlFor='password' >Confirm Password </label>
                        <input type="password" placeholder='Confirm Your Password' className='p-2 outline-none w-full'
                            value={values.cpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="cpassword"
                            id="cpassword"
                        />
                        {
                            errors.cpassword && touched.cpassword ? (
                                <span>{errors.cpassword}</span>
                            ) : ""
                        }
                    </div>
                </div>
                <button type="submit" className='bg-[#fff] px-4 py-1 mt-3 flex mx-auto rounded' >Submit</button>

            </form >
            <h2 className='text-3xl mb-3 text-center'>Read Only Data List</h2>
            <table className='w-full mb-20 text-center'>
                <thead>
                    <tr className='border border-slate-400'>
                        <th className='border border-slate-400'>
                            Sr No.
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
                            Paswword
                        </th>
                        <th className='border border-slate-400'>
                            Update / Delete
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        show?.map((shows, j) =>
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
                                <td>
                                    <Link type='submit' >Update</Link> / <Link>Delete</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>





        </>
    )
}

export default CreatData
