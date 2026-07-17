// Adapted from https://www.youtube.com/watch?v=Cw0J6jYJtzw&t=3135s

package com.carlandre.collaborative_project_manager.controller;

import com.carlandre.collaborative_project_manager.entity.LoginRequest;
import com.carlandre.collaborative_project_manager.entity.SoftwareUser;
import com.carlandre.collaborative_project_manager.service.SoftwareUserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

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

    @GetMapping("get-by-id/{id}")
    public SoftwareUser getUserById(@PathVariable Integer id) {
        return softwareUserService.getSoftwareUserById(id);
    }

    @GetMapping("get-by-email/{email}")
    public SoftwareUser getUserByEmail(@PathVariable String email) { return softwareUserService.getSoftwareUserByEmail(email);}

    @PostMapping
    public void newSoftwareUser(@RequestBody SoftwareUser newUser) {
        softwareUserService.insertSoftwareUser(newUser);
    }

    @PostMapping("validate-password")
    public boolean validatePassword(@RequestBody LoginRequest request) {
        SoftwareUser userToValidate = getUserByEmail(request.getEmail());
        return Objects.equals(userToValidate.getPassword(), request.getPassword());
    }
}
