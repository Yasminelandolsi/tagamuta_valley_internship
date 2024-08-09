package com.babay.SpringSecurity.dto;

import com.babay.SpringSecurity.Model.User.Fonction; // Import the correct Fonction enum
import lombok.Data;

@Data
public class SignupRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Fonction fonction; // Ensure this is the correct enum

}
