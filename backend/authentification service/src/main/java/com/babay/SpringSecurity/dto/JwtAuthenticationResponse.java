package com.babay.SpringSecurity.dto;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {

    private String token;
    private String refreshToken;
    private String name;
    private String fonction; // Use String, not string
}
