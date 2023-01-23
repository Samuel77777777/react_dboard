import { Form, Formik } from "formik";
import React from "react";
import TextField from "./textFied";
import * as Yup from "yup";
import smile from "../assets/smile.png";

const Login = () => {
  const validate = Yup.object({
    FirstName: Yup.string()
      .min(7, "must be characters or more")
      .required("Required"),
    password: Yup.string()
      .min(8, "must be valid password ")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        FirstName: "",
        password: "",
      }}
      validationSchema={validate}
    >
      <div className="flex justify-center">
        <Form>
          <div>
            <p></p>
            <br />
            <h1 className="font-bold uppercase text-4xl  m-3">Login</h1>
            <br /> <br />
            <TextField label="First Name" name="FirstName" type="text" />
            <br />
            <TextField label="Password" name="password" type="password" />
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <br />
            <p className="p-5">
              Don't have an account?
              <span className="text-orange-300 m-2 underline">
                Register here
              </span>
            </p>
          </div>
        </Form>
        <img src={smile} alt="" />
      </div>
    </Formik>
  );
};

export default Login;
