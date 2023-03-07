import * as Yup from "yup";

export const ContactSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter the name"),
    last_name: Yup.string().min(3).max(25).required("Please enter the last name"),
    email: Yup.string().email().required("Please enter the email"),
    number: Yup.string().min(10).max(10).required("Please enter the number"),
    state: Yup.string().min(3).max(25).required("Please enter the state"),
    city: Yup.string().min(3).max(25).required("Please enter the city"),
})
