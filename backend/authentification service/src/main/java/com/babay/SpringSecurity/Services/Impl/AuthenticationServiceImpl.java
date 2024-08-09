package com.babay.SpringSecurity.Services.Impl;

import com.babay.SpringSecurity.Model.Role;
import com.babay.SpringSecurity.Model.User;
import com.babay.SpringSecurity.Services.AuthenticationService;
import com.babay.SpringSecurity.Services.JWTService;
import com.babay.SpringSecurity.dto.JwtAuthenticationResponse;
import com.babay.SpringSecurity.dto.RefreshTokenRequest;
import com.babay.SpringSecurity.dto.SigninRequest;
import com.babay.SpringSecurity.dto.SignupRequest;
import com.babay.SpringSecurity.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder ;
    private final AuthenticationManager authenticationManager ;
    private final JWTService jwtService ;

    public User signup(SignupRequest signupRequest){
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setFirstname(signupRequest.getFirstname());
        user.setLastname(signupRequest.getLastname());
        user.setRole(Role.USER);
        user.setFonction(signupRequest.getFonction()); // Set fonction from SignupRequest

        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        return userRepository.save(user);
    }

    public JwtAuthenticationResponse signin(SigninRequest signinRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()));

        User user = userRepository.findByEmail(signinRequest.getEmail())
                .orElseThrow(() -> new IllegalCallerException("Invalid email or password"));

        String jwt = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAuthenticationResponse response = new JwtAuthenticationResponse();
        response.setToken(jwt);
        response.setRefreshToken(refreshToken);
        response.setName(user.getFirstname() + " " + user.getLastname()); // Combine first and last name

        // Check if fonction is null before calling toString()
        if (user.getFonction() != null) {
            response.setFonction(user.getFonction().toString());
        } else {
            response.setFonction("UNKNOWN"); // or handle this case as needed
        }

        return response;
    }



    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest){
        String userEmail = jwtService.extractUsername(refreshTokenRequest.getToken());
        User user = userRepository.findByEmail(userEmail).orElseThrow();
        if (jwtService.isTokenValid(refreshTokenRequest.getToken(),user)){
            var jwt = jwtService.generateToken(user);
            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(refreshTokenRequest.getToken());
            return jwtAuthenticationResponse ;
        }
        return null ;
    }
}
