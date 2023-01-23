import React from "react";
import { Formik, Form } from "formik";
import TextField from "./textFied";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    FirstName: Yup.string()
      .max(6, "must be 15 characters or less ")
      .required("Required"),
    LastName: Yup.string()
      .max(5, "must be 15 characters or less ")
      .required("Required"),
    Email: Yup.string().email("Email is invalid").required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("confirm password is Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        console.lo(value);
      }}
    >
      {(Formik) => (
        <div>
          <h1 className="font-bold m-3 uppercase text-4xl">Sign up</h1>
          <br />

          <Form>
            <TextField label="First Name" name="FirstName" type="text" />
            <TextField label="Last Name" name="LastName" type="text" />
            <TextField label="Email" name="Email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm password "
              name="confirmPassword"
              type="password"
            />
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
