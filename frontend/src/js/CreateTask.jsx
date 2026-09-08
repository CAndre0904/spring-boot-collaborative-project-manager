import React, { useState, useEffect } from "react";
import "../css/create-project.css";
import { useNavigate } from "react-router-dom";

function CreateTask() {

  const navigate = useNavigate();
  const [taskInput, setTaskInput] = useState('');
  const [dueDateInput, setDueDateInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');

  const { projectid } = useParams();

  function handleTaskInput(e) {
      setTaskInput(e.target.value);
  }
  function handleDueDateInput(e) {
    setDueDateInput(e.target.value);
  }
  function handleUserIdInput(e) {
      setUserIdInput(e.target.value);
    }

  function createTask() {
    const taskData = {
      task: taskInput,
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
    setTaskInput('');
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
             <label htmlFor="task">Task: </label>
             <input id="task" type="text"  onChange={handleTaskInput} value={taskInput} />

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
