// Adapted from https://www.youtube.com/watch?v=Cw0J6jYJtzw&t=3135s

package com.carlandre.collaborative_project_manager.controller;

import com.carlandre.collaborative_project_manager.entity.SoftwareUser;
import com.carlandre.collaborative_project_manager.service.SoftwareUserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("software-user")
public class SoftwareUserController {
    private final SoftwareUserService softwareUserService;

    public SoftwareUserController(SoftwareUserService softwareUserService) {
        this.softwareUserService = softwareUserService;
    }

    @GetMapping
    public List<SoftwareUser> getUsers() {
        return softwareUserService.getAllSoftwareUsers();

    }
}
