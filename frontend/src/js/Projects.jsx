import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [projectTasks, setProjectTasks] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/project")
          .then(response => response.json())
          .then(projects => {
            setProjects(projects);
            projects.forEach((project) =>
                fetch("http://localhost:8080/task/get-project-tasks/" + project.id)
                    .then(response => response.json())
                    .then(tasks => {
                        setProjectTasks(prevProjects => ({...prevProjects, [project.id]: tasks}));
                    })
          )})


  }, []);

  function deleteProject(id) {
    fetch("http://localhost:8080/project/delete-project/" + id, {
    method: "DELETE"})
    .then(response => {
        setProjects(projects.filter(project => project.id != id));
    })
  };

  function editProject(id) {
    navigate("/edit-project/" + id);
  }

  function createTask(projectId) {
      navigate("/create-task/" + projectId);
  }


  return (
    <div className="projects-general">
      <h1>Projects</h1>
      <div>
        {projects.map(project =>
            <div className="individual-project">
                <h3>{project.name}</h3>
                <h3>{project.details}</h3>
                <h3>{project.dueDate}</h3>
                <h3>Tasks:</h3>
                {(projectTasks[project.id] || []).map(task =>
                   <div className="individual-task">
                        <h3>{task.description}</h3>
                        <h3>{task.dueDate}</h3>
                        <h3>{task.userId}</h3>
                   </div>
                )}
                <button onClick={() => createTask(project.id)}> Add Task </button>
                <button onClick={() => deleteProject(project.id)}> Delete </button>
                <button onClick={() => editProject(project.id)}> Edit </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
