package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;


@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username like :username")
	public User findByName(String username);

	@Modifying
	@Query("update User u set u.name = :name, u.emailid = :emailid, u.contact = :contact where username like :username")
	public int updateClubData(String username, String name, String emailid, String contact);
	
	@Query("select u from User u where userid like :uid")		
	public User getUserData(int uid);
	
	
}
