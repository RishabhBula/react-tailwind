import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    name: Yup.string().min(3).required("please enter valid name"),
    last_name: Yup.string().min(3).required("please enter valid last name"),
    email: Yup.string().email().required("please enter valid email"),
    password: Yup.string().min(6).required("please enter password "),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"), null, "password did not match"]),
})