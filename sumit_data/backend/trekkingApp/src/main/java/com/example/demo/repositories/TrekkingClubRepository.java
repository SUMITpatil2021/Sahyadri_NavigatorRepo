package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrekkingClub;

@Repository
@Transactional
public interface TrekkingClubRepository extends JpaRepository<TrekkingClub, Integer>{

	@Query("select c from TrekkingClub c where username like :username")
	TrekkingClub getByName(String username);
	
	

	@Query("select c from TrekkingClub c where clubid like :clubid")
	TrekkingClub findClub(int clubid);

	@Modifying
	@Query("update Login c set c.status = 1 where username like :username and password like :password")
	void updateClub(String username, String password);

	@Modifying
	@Query("update TrekkingClub c set c.name = :name, c.ownername = :ownername, c.emailid = :emailid, c.contact = :contact where username like :username")
	int updateClubData(String username, String name, String ownername, String emailid, String contact);
}
