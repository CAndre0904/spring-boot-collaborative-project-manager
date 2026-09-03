import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import CreateProject from "./CreateProject";
import Projects from "./Projects";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
  <>
  <BrowserRouter>
    <div className="site-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/home">Home </Link>
        <Link to="/create-project">Create Project</Link>
        <Link to="/projects">Projects</Link>
    </div>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}
