package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TrekkingClub;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
		@Autowired
	    UserRepository regirepo;
		
		public User saveUser(User user) {
	        return regirepo.save(user);
	    }

		public User checkUser(String username) {
			return regirepo.findByName(username);
		}

		public User getUname(String uname) {		
			User newuser = regirepo.findByName(uname);
			
			return newuser;
		}

		public List<User> getAllUsers() {
			return regirepo.findAll();
		}

		public void deleteUser(int userid)
		{
			regirepo.deleteById(userid);
		}

		public String updateByName(String username, User updateuser) {
			// TODO Auto-generated method stub
			int num = regirepo.updateClubData(username, updateuser.getName(),updateuser.getEmailid(), updateuser.getContact());
			if(num != 0)
			  return "done";
			else return "not done";
		}
}

