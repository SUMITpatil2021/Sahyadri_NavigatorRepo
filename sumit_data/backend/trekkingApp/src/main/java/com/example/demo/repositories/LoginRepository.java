package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where username like :uname and password like :passwd")
	public Login validateUser(@Param("uname")String uname, @Param("passwd")String passwd); 
	
}
 