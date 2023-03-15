
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Loginform2Schema } from "./Loginform2Schema";
const initialValues = {
    name: "",
    Lastname: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
}

const LoginForm2 = () => {
    const [show, setShow] = useState()


    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: Loginform2Schema,
        onSubmit(values, action) {
            console.log(values);
            action.resetForm();
            setShow(values)
        }

    })
    return (
        <>
            <form onSubmit={handleSubmit} className='w-[550px] mx-auto bg-[#102058] text-white px-2 py-4'>
                <div className='flex gap-4'>
                    <div className='mb-2 flex flex-col flex-start items-start'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Your Name"
                            name="name"
                            id="name"
                            className='p-1 text-black outline-0 w-full'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>
                            {
                                errors.name && touched.name ? (
                                    <div className='text-[#ff0003]'>{errors.name}</div>
                                ) : ""

                            }
                        </span>
                    </div>
                    <div className='mb-2 flex flex-col flex-start items-start'>
                        <label htmlFor="Lastname">Last Name</label>
                        <input type="text" placeholder="Enter Your Last Name"
                            name="Lastname"
                            id="Lastname"
                            className='p-1 text-black outline-0 w-full'
                            value={values.Lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>
                            {
                                errors.Lastname && touched.Lastname ? (
                                    <div className='text-[#ff0003]'>{errors.Lastname}</div>
                                ) : ""

                            }
                        </span>
                    </div>
                </div>
                <div className='mb-2 flex flex-col flex-start items-start'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Your Email"
                        name="email"
                        id="email"
                        className='p-1 text-black outline-0 w-full'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span>
                        {
                            errors.email && touched.email ? (
                                <div className='text-[#ff0003]'>{errors.email}</div>
                            ) : ""

                        }
                    </span>
                </div>
                <div className='mb-2 flex flex-col flex-start items-start'>
                    <label htmlFor="number">Phone</label>
                    <input type="number" placeholder="Enter Your Phone Number"
                        name="number"
                        id="number"
                        className='p-1 text-black outline-0 w-full'
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span>
                        {
                            errors.number && touched.number ? (
                                <div className='text-[#ff0003]'>{errors.number}</div>
                            ) : ""

                        }
                    </span>
                </div>
                <div className='flex gap-4'>
                    <div className='mb-2 flex flex-col flex-start items-start'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Your Password"
                            name="password"
                            id="password"
                            className='p-1 text-black outline-0 w-full'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>
                            {
                                errors.password && touched.password ? (
                                    <div className='text-[#ff0003]'>{errors.password}</div>
                                ) : ""

                            }
                        </span>
                    </div>
                    <div className='mb-2 flex flex-col flex-start items-start'>
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password"
                            name="cpassword"
                            id="cpassword"
                            className='p-1 text-black outline-0 w-full'
                            value={values.cpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>
                            {
                                errors.cpassword && touched.cpassword ? (
                                    <div className='text-[#ff0003]'>{errors.cpassword}</div>
                                ) : ""

                            }
                        </span>
                    </div>
                </div>
                <button type='submit' className='bg-[#fff] text-black px-4 py-1 rounded' >Submit</button>
            </form>
            <div className='py-20 table-auto'>
                <table className='table-auto border border-slate-400  w-full mx-auto text-center'>
                    <thead >
                        <tr className='border border-slate-400'>
                            <th className='border border-slate-400'>
                                S.r. No.</th>
                            <th className='border border-slate-400'>Name</th>
                            <th className='border border-slate-400'>Last Name</th>
                            <th className='border border-slate-400'>Email</th>
                            <th className='border border-slate-400'>Phone</th>
                            <th className='border border-slate-400'>Password</th>
                            <th className='border border-slate-400'>Confirm Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            show &&
                            <tr className='border border-slate-400'>
                                <td className='border border-slate-400'>01</td>
                                <td className='border border-slate-400'>{show.name} </td>
                                <td className='border border-slate-400'>{show.Lastname}</td>
                                <td className='border border-slate-400'>{show.email}</td>
                                <td className='border border-slate-400'>{show.number}</td>
                                <td className='border border-slate-400'>{show.password}</td>
                                <td className='border border-slate-400'>{show.cpassword}</td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default LoginForm2
