import * as Yup from "yup";

export const Loginform2Schema = Yup.object({
    name: Yup.string().min(3).max(25).required("please enter valid name"),
    Lastname: Yup.string().min(3).max(25).required("please enter valid name"),
    email: Yup.string().min(3).max(25).required("please enter valid email"),
    number: Yup.string().min(10).max(10).required("please enter valid number"),
    password: Yup.string().min(6).required("please enter password"),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"), null, "password should be match"])
})