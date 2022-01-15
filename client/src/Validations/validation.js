import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please type an email..."),
  password: yup.string().min(6).required("Please enter a password..."),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().required("Please type an email..."),
  password: yup.string().min(6).required("Please enter a password..."),
  cpassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Please type an email..."),
});
