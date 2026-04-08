package org.authsystem.backend.controller;

import lombok.RequiredArgsConstructor;
import org.authsystem.backend.dto.LoginRequest;
import org.authsystem.backend.dto.LoginResponse;
import org.authsystem.backend.dto.RegisterRequest;
import org.authsystem.backend.services.AuthService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authservice;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request){
        return authservice.register(request);
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authservice.login(request);
    }
}
