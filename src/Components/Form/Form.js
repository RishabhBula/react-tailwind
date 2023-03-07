
import { useFormik } from "formik";
import React, { useState } from "react";
import { ContactSchema } from "../../ContactSchema/ContactSchema";


// import Table from "../../Components/Table/table"

const initialValues = {
    name: "",
    last_name: "",
    email: "",
    number: "",
    state: "",
    city: "",
}

const Form = () => {
    const [state, setstate] = useState()

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        validationSchema: ContactSchema,
        initialValues: initialValues,
        onSubmit: (values, action) => {
            setstate(values)
            console.log(values);
            action.resetForm()

        }

    })




    return (
        <>
            <div className="items-center rounded-6 justify-center p-5 bg-[#203658] text-white shadow-xl my-10 w-[500px] mx-auto">
                <form action="" onSubmit={handleSubmit}>
                    <h1 className="text-2xl text-center py-4">Contact From</h1>
                    <div className="flex gap-4 py-3">
                        <label htmlFor="name" className="block flex-1">
                            <span className="sronly">Name</span>
                            <input
                                type="text"
                                className="block w-full  text-black outline-none shadow-xl p-2 bg-[lavender] rounded-6"
                                placeholder="Enter Your Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="name"

                            />
                            {
                                errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : ""
                            }

                        </label>
                        <label htmlFor="last_name" className="block flex-1">
                            <span className="sronly">Last Name</span>
                            <input
                                type="text"
                                className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                placeholder="Enter Your Last Name"
                                name="last_name"
                                id="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {
                                errors.last_name && touched.last_name ? (
                                    <div>{errors.last_name}</div>
                                ) : ""
                            }

                        </label>
                    </div>
                    <div className="py-3">
                        <label htmlFor="email" className="block flex-1">
                            <span className="sronly">Email</span>
                            <input
                                type="email"
                                className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                placeholder="Enter Your Email"
                                required
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {
                                errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : ""
                            }


                        </label>
                    </div>
                    <div className="py-3">
                        <label htmlFor="number" className="block flex-1">
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
                                    <div>{errors.number}</div>
                                ) : ""
                            }
                        </label>
                    </div>
                    <div className="flex gap-4 py-3">
                        <label htmlFor="state" className="block flex-1">
                            <span className="sronly">State</span>
                            <input
                                type="text"
                                className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                placeholder="Enter Your State"
                                name="state"
                                id="state"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.state && touched.state ? (
                                    <div> {errors.state} </div>
                                ) : ""
                            }

                        </label>
                        <label htmlFor="city" className="block flex-1">
                            <span className="sronly">City</span>
                            <input
                                type="text"
                                className="block w-full text-black  outline-none shadow-xl bg-[lavender]  p-2 rounded-6"
                                placeholder="Enter Your City"
                                name="city"
                                id="city"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.city && touched.city ? (
                                    <div>{errors.city}</div>
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
                </form>
            </div >
            <div className=" mb-10">
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
                                    Number
                                </th>
                                <th className='border border-slate-400'>
                                    City
                                </th>
                                <th className='border border-slate-400'>
                                    State
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {state && <tr>
                                <td className='border border-slate-400'>
                                    1
                                </td>
                                <td className='border border-slate-400'>
                                    {state.name}
                                </td>
                                <td className='border border-slate-400'>
                                    {state.last_name}
                                </td>
                                <td className='border border-slate-400'>
                                    {state.email}
                                </td>
                                <td className='border border-slate-400'>
                                    {state.number}
                                </td>
                                <td className='border border-slate-400'>
                                    {state.state}
                                </td>
                                <td className='border border-slate-400'>
                                    {state.city}
                                </td>
                            </tr>}



                            {/* {api?.map((apis, i) =>
                        (
                            <tr key={i}>
                                <td className='border border-slate-400'>
                                    {apis.id}
                                </td>
                                <td className='border border-slate-400'>
                                    {apis.username}
                                </td>
                                <td className='border border-slate-400'>
                                    {apis.name}
                                </td>
                                <td className='border border-slate-400'>
                                    {apis.email}
                                </td>
                                <td className='border border-slate-400'>
                                    {apis.address.city}
                                </td>
                                <td className='border border-slate-400'>
                                    {apis.id}
                                </td>
                            </tr>
                        )
                        )} */}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Form;
