import React from "react";
import Home from "./pages/Home";
import List from "./pages/List";
import Unemployed from "./pages/Unemployed";
import Notification from "./pages/Notification";
import Employed from "./pages/Employed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "./pages/Companies";
import Login from "./form/Login";
import Registration from "./form/Registration";

const Routess = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="List" element={<List />} />
            <Route path="employed" element={<Employed />} />
            <Route path="unemployed" element={<Unemployed />} />
            <Route path="companies" element={<Companies />} />
            <Route path="notification" element={<Notification />} />
            <Route path="List" element={<List />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routess;
