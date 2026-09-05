package com.carlandre.collaborative_project_manager.service;

import com.carlandre.collaborative_project_manager.entity.Project;
import com.carlandre.collaborative_project_manager.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void insertProject(Project newProject) {
        projectRepository.save(newProject);
    }

    public void deleteProject(Project projectToDelete) {projectRepository.delete(projectToDelete);}

    public Project getProjectById(Integer id) {
        return projectRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + " not found."));
    }

}
