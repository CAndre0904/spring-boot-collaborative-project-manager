import React, { useState, useEffect } from "react";
import "../css/create-project.css";
import { useNavigate, useParams } from "react-router-dom";

function CreateTask() {

  const navigate = useNavigate();
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dueDateInput, setDueDateInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');

  const { projectid } = useParams();

  function handleDescriptionInput(e) {
      setDescriptionInput(e.target.value);
  }
  function handleDueDateInput(e) {
    setDueDateInput(e.target.value);
  }
  function handleUserIdInput(e) {
      setUserIdInput(e.target.value);
    }

  function createTask() {
    const taskData = {
      description: descriptionInput,
      dueDate: dueDateInput,
      userId: userIdInput,
      projectId: projectid
    };
    fetch("http://localhost:8080/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
    });
    setDescriptionInput('');
    setDueDateInput('');
    setUserIdInput('');
    alert("TASK CREATED!");
    navigate("/projects");
  }

  return (
    <div className="create-project-general">
        <h1>Create Task</h1>
        <div className="project-form">
         <form>
             <label htmlFor="description">Description: </label>
             <input id="description" type="text"  onChange={handleDescriptionInput} value={descriptionInput} />

             <label htmlFor="dueDate">Due Date: </label>
             <input id="dueDate" type="date"  onChange={handleDueDateInput} value={dueDateInput} />

             <label htmlFor="userId">User ID: </label>
             <input id="userId" type="number"  onChange={handleUserIdInput} value={userIdInput} />

             <button onClick={createTask}> Create Task </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
