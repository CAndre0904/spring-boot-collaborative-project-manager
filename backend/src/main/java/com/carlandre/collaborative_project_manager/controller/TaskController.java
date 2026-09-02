package com.carlandre.collaborative_project_manager.controller;

import com.carlandre.collaborative_project_manager.entity.Task;
import com.carlandre.collaborative_project_manager.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("task")
@CrossOrigin
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getAllTasks();

    }

    @GetMapping("get-task-by-id/{id}")
    public Task getTaskById(@PathVariable Integer id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public void newTask(@RequestBody Task newTask) {
        taskService.insertTask(newTask);
    }

}
