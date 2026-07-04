// Adapted from https://www.youtube.com/watch?v=Cw0J6jYJtzw&t=3135s

package com.carlandre.collaborative_project_manager.controller;

import com.carlandre.collaborative_project_manager.entity.SoftwareUser;
import com.carlandre.collaborative_project_manager.service.SoftwareUserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("software-user")
@CrossOrigin
public class SoftwareUserController {
    private final SoftwareUserService softwareUserService;

    public SoftwareUserController(SoftwareUserService softwareUserService) {
        this.softwareUserService = softwareUserService;
    }

    @GetMapping
    public List<SoftwareUser> getUsers() {
        return softwareUserService.getAllSoftwareUsers();

    }

    @GetMapping("{id}")
    public SoftwareUser getUserById(@PathVariable Integer id) {
        return softwareUserService.getSoftwareUserById(id);
    }

    @PostMapping
    public void newSoftwareUser(@RequestBody SoftwareUser newUser) {
        softwareUserService.insertSoftwareUser(newUser);
    }
}
