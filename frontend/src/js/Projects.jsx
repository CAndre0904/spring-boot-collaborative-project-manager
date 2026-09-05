import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/project")
          .then(response => response.json())
          .then(projects => {
            setProjects(projects);
          })
  }, []);

  function deleteProject(id) {
    fetch("http://localhost:8080/project/delete-project/" + id, {
    method: "DELETE"})
    .then(response => {
        setProjects(projects.filter(project => project.id != id));
    })
  };

  return (
    <div className="projects-general">
      <h1>Projects</h1>
      <div>
        {projects.map(project =>
            <div className="individual-project">
                <h3>{project.name}</h3>
                <h3>{project.details}</h3>
                <h3>{project.dueDate}</h3>
                <button onClick={() => deleteProject(project.id)}> Delete </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
