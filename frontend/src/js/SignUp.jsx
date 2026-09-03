// Adapted from Codecademy

import React, { useState } from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  function handleEmailInput(e) {
    setEmailInput(e.target.value);
  }
  function handleNameInput(e) {
      setNameInput(e.target.value);
  }
  function handlePasswordInput(e) {
      setPasswordInput(e.target.value);
  }

  function createAccount() {
    const details = {
      email: emailInput,
      name: nameInput,
      password: passwordInput,
    };
    fetch("http://localhost:8080/software-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    });
    setEmailInput('');
    setNameInput('');
    setPasswordInput('');
    alert("ACCOUNT CREATED!");
    navigate("/signin");
  }

  return (
    <div className="sign-up-general">
        <h1>Sign Up</h1>
        <div className="sign-up-form">
        <form>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text"  onChange={handleEmailInput} value={emailInput} />

           <label htmlFor="name">Name: </label>
           <input id="name" type="text"  onChange={handleNameInput} value={nameInput} />

           <label htmlFor="password">Password: </label>
           <input id="password" type="text"  onChange={handlePasswordInput} value={passwordInput} />

            <button onClick={createAccount}> Create Account </button>
        </form>
        </div>
    </div>
  );
}

export default SignUp;
