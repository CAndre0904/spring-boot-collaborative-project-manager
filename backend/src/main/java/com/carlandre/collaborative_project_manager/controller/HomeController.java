package com.carlandre.collaborative_project_manager.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {
    @GetMapping("/home")
    public String Home() {
        return "This is the home page.";
    }
}

