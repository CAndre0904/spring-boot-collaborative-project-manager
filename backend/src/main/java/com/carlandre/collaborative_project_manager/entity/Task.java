package com.carlandre.collaborative_project_manager.entity;

import java.time.LocalDate;
import java.util.Objects;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String details;

    private LocalDate dueDate;
    private int userId;

    public Task() {

    }

    public Task(String name, String details, LocalDate dueDate, Integer userId) {
        this.name = name;
        this.details = details;
        this.dueDate = dueDate;
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return id == task.id && Objects.equals(name, task.name) && Objects.equals(details, task.details) && Objects.equals(dueDate, task.dueDate) && Objects.equals(userId, task.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, details, dueDate, userId);
    }
}
