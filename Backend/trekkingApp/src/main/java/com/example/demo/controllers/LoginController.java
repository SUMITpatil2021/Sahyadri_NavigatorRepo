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
import com.example.demo.entities.User;
import com.example.demo.services.LoginService;

import pojo.CommonUser;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class LoginController {
	
	@Autowired
    LoginService lservice;

	@PostMapping("/login")
    public CommonUser login(@RequestBody Login user) {
		Login authenticatedUser = lservice.checkUser(user.getUsername(), user.getPassword());
		System.out.println(authenticatedUser);
		
        if (authenticatedUser == null) {
            return new CommonUser(-1,0,0);
        }
        else if(authenticatedUser.getStatus() == 0) {
        	return new CommonUser(3,0,0);
        }
        else {
        	Role roll = authenticatedUser.getRoleid();
            int role = roll.getRoleid();
        		if(role == 3) {
        			int clubid = lservice.getclubid(authenticatedUser.getUsername());
        			System.out.println(clubid);
        			return new CommonUser(3,1,clubid);
        		}
        		if(role == 2){
        			int userid = lservice.getUserId(authenticatedUser.getUsername());
        			System.out.println(userid);
        			return new CommonUser(2,1,userid);
        		}
        return new CommonUser(1,1,0);
    }
}
}
