package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
   LoginRepository lrepository;

	public Login checkUser(String uname, String passwd) {
		
		Login user =  lrepository.validateUser(uname, passwd);
	
		
		if (user == null || !user.getPassword().equals(passwd)) {
            return null;
        }
		else return user;
	}
	
	public Login savelog(Login login)
	{
		return lrepository.save(login);
	}

	public int getclubid(String name) {
		return lrepository.getclubid(name);
	}

	public int getUserId(String username) {
		// TODO Auto-generated method stub
		return lrepository.getUserid(username);
	}
}