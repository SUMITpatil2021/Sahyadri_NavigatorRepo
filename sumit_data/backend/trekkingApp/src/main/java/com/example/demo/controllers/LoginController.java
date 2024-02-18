package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class LoginController {
	
	@Autowired
    LoginService lservice;

	@PostMapping("/login")
    public int login(@RequestBody Login user) {
		Login authenticatedUser = lservice.checkUser(user.getUsername(), user.getPassword());
		
        if (authenticatedUser == null) {
            return -1;
        }
         Role roll = authenticatedUser.getRoleid();
         return roll.getRoleid();
    }

}
