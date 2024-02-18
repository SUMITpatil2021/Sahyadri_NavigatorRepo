package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;


@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username like :username")
	public User findByName(String username);
	
//	@Query("select u from User u ")
//	 public User getAllUser();
	
	  List<User> findAll();
	  
	  
	  
	
}