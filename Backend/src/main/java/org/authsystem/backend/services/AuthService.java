package org.authsystem.backend.services;

import lombok.RequiredArgsConstructor;
import org.authsystem.backend.config.JwtService;
import org.authsystem.backend.dto.LoginRequest;
import org.authsystem.backend.dto.LoginResponse;
import org.authsystem.backend.dto.RegisterRequest;
import org.authsystem.backend.enums.Role;
import org.authsystem.backend.model.User;
import org.authsystem.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepo;
    private final JwtService jwtService;


    public String register(RegisterRequest request) {
        Role role = Role.USER; // default role

        if (request.getRole() != null) {
            role = Role.valueOf(request.getRole().toUpperCase());
        }
        User user= User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .role(role)
                .build();

        userRepo.save(user);

        return "User Registered Successfully";
    }
    public LoginResponse login(LoginRequest request) {

        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(token, user.getRole().name());
    }
}
