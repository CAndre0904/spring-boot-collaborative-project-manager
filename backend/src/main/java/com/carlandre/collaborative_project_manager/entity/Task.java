package com.carlandre.collaborative_project_manager.entity;

import java.time.LocalDate;
import java.util.Objects;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String description;

    private LocalDate dueDate;
    private int userId;

    private int projectId;

    public Task() {

    }

    public Task(String description, LocalDate dueDate, Integer userId, Integer projectId) {
        this.description = description;
        this.dueDate = dueDate;
        this.userId = userId;
        this.projectId = projectId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return id == task.id && Objects.equals(description, task.description) && Objects.equals(dueDate, task.dueDate) && Objects.equals(userId, task.userId) && Objects.equals(projectId, task.projectId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, dueDate, userId, projectId);
    }
}
