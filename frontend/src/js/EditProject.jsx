import React, { useState, useEffect } from "react";
import "../css/create-project.css";
import { useNavigate, useParams } from "react-router-dom";

function EditProject() {

  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
      fetch("http://localhost:8080/project/get-project-by-id/" + id)
            .then(response => response.json())
            .then(project => {
              setNameInput(project.name);
              setDetailsInput(project.details);
              setDueDateInput(project.dueDate);
              setUserIdInput(project.userId);
            })
    }, []);

  function editProject() {
    const projectData = {
      id: id,
      name: nameInput,
      details: detailsInput,
      dueDate: dueDateInput,
      userId: userIdInput
    };
    fetch("http://localhost:8080/project/edit-project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
    });
    alert("PROJECT EDITED!");
    navigate("/projects");
  }

  return (
    <div className="create-project-general">
        <h1>Edit Project</h1>
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

             <button onClick={editProject}> Edit Project </button>
        </form>
      </div>
    </div>
  );
}

export default EditProject;
