import React from "react";

import { Modal, Button, ModalActions } from "semantic-ui-react";
import "./add.css";
import TextField from "../form/textFied";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const validate = Yup.object({
  FirstName: Yup.string()
    .min(7, "7 characters or more")
    .required("this is required"),
  email: Yup.string()
    .email("invalid email address")
    .required("this is required"),
  date: Yup.string().min(6, "invalid date").required("this is required"),
  Phone: Yup.string()
    .min(9, "9 characters required")
    .required("this is required "),
  technology: Yup.string()
    .min(20, "20 characters required")
    .required("this is required"),
  employment: Yup.string()
    .min(20, "20 characters required")
    .required("this is required "),
  specialization: Yup.string()
    .min(20, "20 characters required")
    .required("this is required "),
});

const Update = () => {
  return (
    <Formik
      initialValues={{
        FirstName: "",
        email: "",
        date: "",
        Phone: "",
        technology: "",
        specialization: "",
      }}
      validationSchema={validate}
    >
      <div>
        <Modal
          trigger={
            <Button className="link" color="green">
              Update
            </Button>
          }
        >
          <Modal.Header>Update user</Modal.Header>
          <Form>
            <div className="sap">
              <TextField
                placeholder="Full name"
                name="FirstName"
                type="text"
                className="field"
              />
              <TextField
                placeholder="Email"
                name="email"
                type="email"
                className="field"
              />
              <TextField
                placeholder="Date"
                name="date"
                type="date"
                className="field"
              />
              <TextField
                placeholder="Phone"
                name="Phone"
                type="text"
                className="field"
              />
              <TextField
                placeholder="Technologies"
                name="technology"
                type="text"
                className="field"
              />
              <TextField
                placeholder="Employment Status"
                name="employment"
                type="text"
                className="field"
              />
              <TextField
                placeholder="Specialization"
                name="specialization"
                type="text"
                className="field"
              />
              <textarea
                required
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Description"
                className="field  text-center "
              ></textarea>
            </div>
            <br />
            <br /> <br />
            <div className="justify-between flex m-4 ">
              <p></p>
              <button
                class="bg-green-500 hover:bg-green-700  text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </Form>
        </Modal>
      </div>
    </Formik>
  );
};

export default Update;
