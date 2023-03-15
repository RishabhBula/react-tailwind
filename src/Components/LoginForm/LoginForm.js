import React, { useState } from 'react'
import contact from "../../Assets/images/contact.jpg"
import { useFormik } from 'formik'
import { Form } from 'formik'
import { signUpSchema } from "../../signUpSchema/signUpSchema"

const initialValues = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
}

const LoginForm = () => {
    const [show, setShow] = useState(false)
    const [showInput] = useState(false)

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        validationSchema: signUpSchema,
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            setShow(values);
            action.resetForm();
        }

    })



    return (
        <div className='bg-[#102058] text-white '>
            <div className='container mx-auto'>
                <div className='flex justify-center rounded-6 my-20 py-4 gap-10 px-20'>
                    <div className='w-full flex-1'>
                        <img src={contact} alt="" width="100%" className='object-cover h-full object-left' />
                    </div>
                    <Form action="" onSubmit={handleSubmit} className="flex-1 ">
                        <h1 className="text-2xl text-center pb-4">Register Form</h1>
                        <div className="flex gap-4 py-3">
                            <label htmlFor='name' className="block flex-1">
                                <span className="sronly">Name</span>
                                <input
                                    type="text"
                                    className="block w-full text-black outline-none shadow-xl p-2 bg-[lavender] rounded-6"
                                    placeholder="Enter Your Name"
                                    name='name'
                                    id='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.name && touched.name ? (

                                        <span className='text-[#ff0003]'> {errors.name}</span>
                                    ) : ""
                                }
                            </label>
                            <label htmlFor='last_name' className="block flex-1">
                                <span className="sronly">Last Name</span>
                                <input
                                    type="text"
                                    className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                    placeholder="Enter Your Last Name"
                                    name='last_name'
                                    id='last_name'
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {
                                    errors.last_name && touched.last_name ? (
                                        <span className='text-[#ff0003]'> {errors.last_name}</span>
                                    ) : ""
                                }
                            </label>
                        </div>
                        <div className="py-3">
                            <label htmlFor='email' className="block flex-1">
                                <span className="sronly">Email</span>
                                <input
                                    type="email"
                                    className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                    placeholder="Enter Your Email"
                                    name='email'
                                    id='email'
                                    required
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.email && touched.email ? (

                                        <span className='text-[#ff0003]'> {errors.email}</span>
                                    ) : ""
                                }
                            </label>
                        </div>
                        <div className="py-3">
                            <label htmlFor='number' className="block flex-1">
                                <span className="sronly">Number</span>
                                <input
                                    type="number"
                                    className="hover:appearance-none appearance-none block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                    placeholder="Enter Your Number"
                                    name="number"
                                    id="number"
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.number && touched.number ? (

                                        <span className='text-[#ff0003]'> {errors.number}</span>
                                    ) : ""
                                }

                            </label>
                        </div>
                        <div className="flex gap-4 py-3">
                            <label htmlFor='password' className="block flex-1">
                                <span className="sronly">Password</span>
                                <input
                                    type={showInput ? 'text' : 'password'}
                                    className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete=""

                                />
                                {
                                    errors.password && touched.password ? (

                                        <span className='text-[#ff0003]'> {errors.password}</span>
                                    ) : ""
                                }


                            </label>
                            <label htmlFor='cpassword' className="block flex-1">
                                <span className="sronly">Confirm Password</span>
                                <input
                                    type="password"
                                    className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                    placeholder="Confirm Your Password"
                                    name="cpassword"
                                    id="cpassword"
                                    value={values.cpassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete=""
                                />
                                {
                                    errors.cpassword && touched.cpassword ? (

                                        <span className='text-[#ff0003]'> {errors.cpassword}</span>
                                    ) : ""
                                }
                            </label>
                        </div>
                        <div className="flex gap-3 py-2">
                            <button type="submit" className="border-0 px-5 py-1 bg-black text-white rounded-6">
                                Submit
                            </button>
                            <button type="reset" className="border-0 px-5 py-1 bg-black text-white rounded-6">
                                Clear
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            {show ? (
                <div>
                    <p><span className='text-[#ff0003]'> {show.name}</span> </p>
                    <p><span className='text-[#ff0003]'> {show.last_name}</span></p>
                    <p><span className='text-[#ff0003]'> {show.number}</span></p>
                    <p><span className='text-[#ff0003]'> {show.email}</span></p>
                    <p><span className='text-[#ff0003]'> {show.password}</span></p>
                    <p><span className='text-[#ff0003]'> {show.cpassword}</span> </p>
                </div>
            ) : ""}
        </div >
    )
}

export default LoginForm
