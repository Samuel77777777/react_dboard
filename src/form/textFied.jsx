import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={` shadow appearance-none border rounded w-full ${
          meta.touched && meta.error && `color:red;`
        } py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        autoComplete="false"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-red-700"
      />
    </div>
  );
};

export default TextField;
