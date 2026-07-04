// Adapted from Codecademy

import React, { useState } from "react";

function SignUp() {
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
  }

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text"  onChange={handleEmailInput} value={emailInput} />
        </form>
        <form>
           <label htmlFor="name">Name: </label>
           <input id="name" type="text"  onChange={handleNameInput} value={nameInput} />
        </form>
        <form>
            <label htmlFor="password">Password: </label>
            <input id="password" type="text"  onChange={handlePasswordInput} value={passwordInput} />
        </form>
      </div>

      <button onClick={createAccount}> Create Account </button>
    </>
  );
}

export default SignUp;
