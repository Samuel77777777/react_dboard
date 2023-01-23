import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Notification = () => {
  return (
    <Div className="flex w-full">
      <Sidebar />
      <div className="contain">
        <Navbar />
        <div className="m-10">
          <h1 className="text-center font-bold text-3xl font-mono uppercase">
            Notification
          </h1>
          <div></div>
        </div>
      </div>
    </Div>
  );
};

export default Notification;

const Div = styled.div`
  .contain {
    flex: 6;
  }
`;
