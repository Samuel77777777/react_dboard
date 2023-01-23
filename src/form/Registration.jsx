import React from "react";
import { Link } from "react-router-dom";
import smile from "../assets/smile.png";
import Signup from "./Signup";

const Registration = () => {
  return (
    <div className="mt-3">
      <div className="flex justify-center">
        <div className="m-12">
          <Signup />

          <p>Already have an account? Login here</p>
        </div>
        <div className="flex-end">
          <img src={smile} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
