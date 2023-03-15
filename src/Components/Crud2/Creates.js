
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ValidationSchema } from "./ValidationSchema";
import axios from 'axios';
const initialValues = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  cpassword: "",
}
const Creates = () => {

  const [show, setShow] = useState()

  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [cpassword, setcPassword] = useState();

  const handleSubmitData = (e) => {
    const formData = new FormData()
    formData.append("firstName", "e.name")
    formData.append("lastName", " e.last_name")
    formData.append("email", "e.email")
    formData.append("password", "e.password")
    const myData = {
      name: e.name,
      lname: e.last_name,
      email: e.email,
      pass: e.password
    }
    axios.post("https://6406e4a3862956433e5cd6fb.mockapi.io/CrudApp/ListData", myData)
  }

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit(values, action) {
      // e.preventDefault()
      handleSubmitData(values)
      action.resetForm()
    }
  })




  return (

    <form onSubmit={handleSubmit} className='p-3 w-[600px] bg-[#999] mx-auto mt-10 mb-10 '>
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
      <div>
        <table>
          <tbody>
            {
              show &&
              <tr className='border border-slate-400'>
                <td className='border border-slate-400'>01</td>
                <td className='border border-slate-400'>{show.name} </td>
                <td className='border border-slate-400'>{show.lastName}</td>
                <td className='border border-slate-400'>{show.email}</td>
                <td className='border border-slate-400'>{show.password}</td>
                <td className='border border-slate-400'>{show.cpassword}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </form>

  )
}

export default Creates
