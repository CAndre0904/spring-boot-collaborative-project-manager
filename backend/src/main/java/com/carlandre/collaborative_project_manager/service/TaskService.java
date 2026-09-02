package com.carlandre.collaborative_project_manager.service;

import com.carlandre.collaborative_project_manager.entity.Task;
import com.carlandre.collaborative_project_manager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public void insertTask(Task newTask) {
        taskRepository.save(newTask);
    }

    public Task getTaskById(Integer id) {
        return taskRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + " not found."));
    }

}
