package com.carlandre.collaborative_project_manager.controller;

import com.carlandre.collaborative_project_manager.entity.Project;
import com.carlandre.collaborative_project_manager.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("project")
@CrossOrigin
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getProjects() {
        return projectService.getAllProjects();

    }

    @GetMapping("get-project-by-id/{id}")
    public Project getProjectById(@PathVariable Integer id) {
        return projectService.getProjectById(id);
    }

    @PostMapping
    public void newProject(@RequestBody Project newProject) {
        projectService.insertProject(newProject);
    }

    @GetMapping("delete-project/{id}")
    public void deleteProject(@PathVariable Integer id) {
        Project projectToDelete = getProjectById(id);
        projectService.deleteProject(projectToDelete);
    }

}
