import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}
