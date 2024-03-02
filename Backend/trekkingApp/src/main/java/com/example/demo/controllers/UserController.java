package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.TrekkingClub;
import com.example.demo.entities.User;
import com.example.demo.services.LoginService;
import com.example.demo.services.UserService;

import pojo.CommonUser;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
	@Autowired
    UserService regiService;
    
    @Autowired
    LoginService lservice ;
    
    @PostMapping("/register")
    public String saveUser(@RequestBody CommonUser user) {
    	System.out.println(user);
    	
    	//Role entity object
    	Role role = new Role(user.getRoleid(), user.getRoletype());
    	
    	//Login entity object
    	Login loginuser = new Login(user.getUsername(), user.getPassword(), role, user.getStatus());
    	
    	Login save=lservice.savelog(loginuser);
    	System.out.println(save);
    	//User entity object
    	User user1 = new User(user.getName(), user.getEmailid(), user.getContact(), user.getUsername(), user.getPassword(), loginuser);
    	
    	//For checking username exit or not
    	String uname = user1.getUsername();
    	User newuser = regiService.checkUser(uname);
    	
    	if(newuser == null) {
    		User savedUser = regiService.saveUser(user1);
        	System.out.println(savedUser);
   
        	if(savedUser == null)
        		return "Registration Failed";
        	else
        		return "User Registered";
    	}
    	else return "Already used";
    }
    
    @GetMapping("/getall")
	public List<User> getAllUser()
	{
		return regiService.getAllUsers();
		
	}
    
    @DeleteMapping("/deleteuser")
    public void deleteUser(@RequestParam("uid") int userid)
    {
    	regiService.deleteUser(userid);
    }
    
    @GetMapping("/fetchtrekkerdata/{username}")
	public User sendUserData(@PathVariable String username)
	{
    	User newUser =  regiService.getUname(username);	
		System.out.println(newUser);
		return newUser;
	}
    
    @PutMapping("/updatetrekkerdata/{username}")
    public String updateUserData(@PathVariable("username") String username, @RequestBody CommonUser user) {
		System.out.println(user);
    	User updateuser = new User(user.getName(), user.getUsername(), user.getEmailid(), user.getContact());
    	System.out.println(updateuser);
		return regiService.updateByName(username, updateuser);	
	}
    
}
