package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService   {
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
		
		// fetching details of all trekkers 
		public List<User> getAllUsers()
		{
			return regirepo.findAll();

		}
		
		// delete trekker 
		public void deleteUser(int userid)
		{
			regirepo.deleteById(userid);
		}
		
		public void updateById(User user) {
			System.out.println(user);
			Optional<User> op=regirepo.findById(user.getUserid());
			if(op.isPresent()) {
				User p = op.get();
				p.setName(user.getName());
				p.setEmailid(user.getEmailid());
				p.setContact(user.getContact());
				
				regirepo.save(p);
				
			}		
		}
		
		
}

