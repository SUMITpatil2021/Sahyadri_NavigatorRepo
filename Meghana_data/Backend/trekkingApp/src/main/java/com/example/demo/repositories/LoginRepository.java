package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where username like :uname and password like :passwd")
	public Login validateUser(String uname, String passwd);

	@Query("select c.clubid from TrekkingClub c where username like :name")
	public int getclubid(String name);

	@Query("select u.userid from User u where username like :name")
	public int getUserid(String name); 
	
	
}
 