import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import Tasks from "./Tasks";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router";

export default function App() {
  return (
  <>
  <BrowserRouter>
    <div className="site-links">
        <Link to="/home">Home </Link>
        <Link to="/tasks">Tasks </Link>
    </div>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}
