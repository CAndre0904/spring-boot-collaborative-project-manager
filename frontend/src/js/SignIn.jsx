import React, { useState } from "react";

function SignIn() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  function handleEmailInput(e) {
    setEmailInput(e.target.value);
  }
  function handlePasswordInput(e) {
      setPasswordInput(e.target.value);
  }

  async function validateDetails() {
    fetch("http://localhost:8080/validate-details", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: emailInput,
        password: passwordInput}),

    });
    const valid = await response.json();
    if (valid === true) {
        navigate("/home");
    }
    else {
        alert("INCORRECT DETAILS");
    }
    setEmailInput('');
    setPasswordInput('');
  }

  return (
    <>
      <div>
        <h1>Sign In</h1>
        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text"  onChange={handleEmailInput} value={emailInput} />
        </form>
        <form>
            <label htmlFor="password">Password: </label>
            <input id="password" type="text"  onChange={handlePasswordInput} value={passwordInput} />
        </form>
      </div>

      <button onClick={validateDetails}> Sign In </button>
    </>
  );
}

export default SignIn;
