
import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    last_name: Yup.string().min(3).max(20).required("Please enter your last name"),
    number: Yup.string().min(10).max(10).required("Please enter your valid number"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter password"),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"), null, "password should be match"])

})
