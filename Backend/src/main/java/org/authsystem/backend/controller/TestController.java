package org.authsystem.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/public")
    public String publicApi() {
        return "Public Content";
    }

    @GetMapping("/user")
    public String userApi() {
        return "User Content";
    }

    @GetMapping("/admin")
    public String adminApi() {
        return "Admin Content";
    }
}