package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BookTrekk;
import com.example.demo.entities.User;

import pojo.BookTrekkData;


@Repository
@Transactional
public interface BookTrekkRepository extends JpaRepository<BookTrekk, Integer> {
	
	
//		@Query(value = "SELECT t.bookid, t.userid, t.trekkid, t.charges, t.city, t.date, t.pickuppoint, t.trekkingpoint, t.trekkname, "
//			+ "t.noofpersons, t.totalcharges, u.name, u.contact, u.emailid, u.username, u.password, u.loginid "
//	        + "FROM bookedtrekk t "
//	        + "JOIN user u ON t.userid = u.userid"
//	        + " WHERE t.trekkid = :trekkId", nativeQuery = true)
//		public List<BookTrekk> getData(int trekkId);
	
	
//		@Query("select t from BookTrekk t where trekkid like :trekkId")
//		public BookTrekk getData(int trekkId); 
		
	
//	@Query(value = "SELECT t.bookid, t.userid, t.trekkid, t.charges, t.city, t.date, t.pickuppoint, t.trekkingpoint, t.trekkname, "
//			+ "t.noofpersons, t.totalcharges "
//	        + "FROM bookedtrekk t "
//	        + "WHERE t.trekkid = :trekkId", nativeQuery = true)
//		public BookTrekk getData(int trekkId);
	
	@Query(value = "SELECT t.bookid, t.userid, t.trekkid, t.charges, t.city, t.date, t.pickuppoint, t.trekkingpoint, t.trekkname, "
			+ "t.noofpersons, t.totalcharges "
	        + "FROM bookedtrekk t "
	        + "WHERE t.trekkid = :trekkId", nativeQuery = true)
		public List<BookTrekk> getData(int trekkId);
}
