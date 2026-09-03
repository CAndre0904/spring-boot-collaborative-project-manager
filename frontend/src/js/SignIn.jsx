import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signin.css";

function SignIn() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  function handleEmailInput(e) {
    setEmailInput(e.target.value);
  }
  function handlePasswordInput(e) {
      setPasswordInput(e.target.value);
  }

  async function validateDetails() {
    const response = await fetch("http://localhost:8080/software-user/validate-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: emailInput,
        password: passwordInput}),

    });
    const valid = await response.json()
    if (valid === true) {
        navigate("/home");
    }
    else {
        alert("LOGIN DETAILS ARE INCORRECT");
    }
    setEmailInput('');
    setPasswordInput('');
  }

  return (
      <div className="sign-in-general">
        <h1>Sign In</h1>
        <div className="sign-in-form">
           <form>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text"  onChange={handleEmailInput} value={emailInput} />

            <label htmlFor="password">Password: </label>
            <input id="password" type="text"  onChange={handlePasswordInput} value={passwordInput} />

            <button onClick={validateDetails}> Sign In </button>
           </form>
        </div>
      </div>


  );
}

export default SignIn;
