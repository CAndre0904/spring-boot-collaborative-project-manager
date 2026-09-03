package com.carlandre.collaborative_project_manager.entity;

import java.time.LocalDate;
import java.util.Objects;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String details;

    private LocalDate dueDate;
    private int userId;

    public Project() {

    }

    public Project(String name, String details, LocalDate dueDate, Integer userId) {
        this.name = name;
        this.details = details;
        this.dueDate = dueDate;
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return id == project.id && Objects.equals(name, project.name) && Objects.equals(details, project.details) && Objects.equals(dueDate, project.dueDate) && Objects.equals(userId, project.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, details, dueDate, userId);
    }
}
