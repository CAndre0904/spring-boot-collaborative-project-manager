import React, { useState, useEffect } from "react";
import "../css/tasks.css";
import { useNavigate } from "react-router-dom";

function Tasks() {

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

  function createTask() {
    const taskData = {
      name: nameInput,
      details: detailsInput,
      dueDate: dueDateInput,
      userId: userIdInput
    };
    fetch("http://localhost:8080/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
    });
    setNameInput('');
    setDetailsInput('');
    setDueDateInput('');
    setUserIdInput('');
    alert("TASK CREATED!");
    navigate("/tasks");
  }

  return (
    <div className="tasks">
      <div>
        <h1>Tasks</h1>
        <form>
           <label htmlFor="name">Name: </label>
           <input id="name" type="text"  onChange={handleNameInput} value={nameInput} />
        </form>
        <form>
            <label htmlFor="details">Details: </label>
            <input id="details" type="text"  onChange={handleDetailsInput} value={detailsInput} />
        </form>
        <form>
             <label htmlFor="dueDate">Due Date: </label>
             <input id="dueDate" type="date"  onChange={handleDueDateInput} value={dueDateInput} />
        </form>
        <form>
             <label htmlFor="userId">User ID: </label>
             <input id="userId" type="number"  onChange={handleUserIdInput} value={userIdInput} />
        </form>
      </div>

      <button onClick={createTask}> Create Task </button>
    </div>
  );
}

export default Tasks;
