import React, { useState, useEffect } from "react";
import "../css/create-project.css";
import { useNavigate } from "react-router-dom";

function CreateProject() {

  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [detailsInput, setDetailsInput] = useState('');
  const [dueDateInput, setDueDateInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');
  function handleNameInput(e) {
      setNameInput(e.target.value);
  }
  function handleDetailsInput(e) {
      setDetailsInput(e.target.value);
  }
  function handleDueDateInput(e) {
    setDueDateInput(e.target.value);
  }
  function handleUserIdInput(e) {
      setUserIdInput(e.target.value);
    }

  function createProject() {
    const projectData = {
      name: nameInput,
      details: detailsInput,
      dueDate: dueDateInput,
      userId: userIdInput
    };
    fetch("http://localhost:8080/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
    });
    setNameInput('');
    setDetailsInput('');
    setDueDateInput('');
    setUserIdInput('');
    alert("PROJECT CREATED!");
    navigate("/projects");
  }

  return (
    <div className="create-project-general">
        <h1>Create Project</h1>
        <div className="project-form">
         <form>
           <label htmlFor="name">Name: </label>
           <input id="name" type="text"  onChange={handleNameInput} value={nameInput} />

            <label htmlFor="details">Details: </label>
            <input id="details" type="text"  onChange={handleDetailsInput} value={detailsInput} />

             <label htmlFor="dueDate">Due Date: </label>
             <input id="dueDate" type="date"  onChange={handleDueDateInput} value={dueDateInput} />

             <label htmlFor="userId">User ID: </label>
             <input id="userId" type="number"  onChange={handleUserIdInput} value={userIdInput} />

             <button onClick={createProject}> Create Project </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
