import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      "Please enter a valid email address"
    )
    .required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password cannot exceed 12 characters")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password cannot exceed 12 characters")
    .required("Password is required"),
});
