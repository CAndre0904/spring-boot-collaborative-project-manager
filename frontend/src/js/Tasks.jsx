import React, { useState } from "react";
import "../css/tasks.css";
import { useNavigate } from "react-router-dom";

function TaskAdd() {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [detailsInput, setDetailsInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [userInput, setUserInput] = useState('');
  function handleNameInput(e) {
      setNameInput(e.target.value);
  }
  function handleDetailsInput(e) {
      setDetailsInput(e.target.value);
  }
  function handleDateInput(e) {
    setDateInput(e.target.value);
  }
  function handleUserInput(e) {
      setUserInput(e.target.value);
    }

  function createTask() {
    const taskData = {
      name: nameInput,
      details: detailsInput,
      date: dateInput,
      user: userInput
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
    setDateInput('');
    setUserInput('');
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
             <label htmlFor="date">Date: </label>
             <input id="date" type="date"  onChange={handleDateInput} value={dateInput} />
        </form>
        <form>
             <label htmlFor="user">User ID: </label>
             <input id="user" type="text"  onChange={handleUserInput} value={userInput} />
        </form>
      </div>

      <button onClick={createTask}> Create Task </button>
    </div>
  );
}

export default TaskAdd;
