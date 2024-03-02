package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BookTrekk;
import com.example.demo.entities.User;
import com.example.demo.repositories.BookTrekkRepository;
import com.example.demo.repositories.UserRepository;

import pojo.BookTrekkData;

@Service
public class BookTrekkService {
	
	@Autowired
	BookTrekkRepository brepo;
	
	@Autowired
	UserRepository urepo;

	public BookTrekk addTrekk(BookTrekk book) {
		return brepo.save(book);
	}
	
//	public BookTrekkData getBookTrekkDetailsById(int trekkId) {
//		
//		BookTrekk data = brepo.getData(trekkId);
//		
//		System.out.println(data);
//		
//		User user = data.getUserid();
//		int uid = user.getUserid();
//		User newuser = urepo.getUserData(uid);
//		
//		System.out.println(newuser);
//		
//		BookTrekkData bt = new BookTrekkData(newuser.getName(), data.getNoofpersons(), data.getTotalcharges());
//		System.out.println("service "+bt);
//		return bt;
//	}
	
public List<BookTrekkData> getBookTrekkDetailsById(int trekkId) {
		
		List<BookTrekkData> book = new ArrayList();
		List<BookTrekk> data = brepo.getData(trekkId);
		
		System.out.println(data);
		
		if (!data.isEmpty()) {
			for(BookTrekk d : data){
				 User user = d.getUserid(); // Accessing the first BookTrekk's associated User
				 System.out.println(user.getUserid());
				 
				 int uid = user.getUserid();
			     User newuser = urepo.getUserData(uid);
			     System.out.println(newuser);
			     BookTrekkData bt = new BookTrekkData(newuser.getName(), d.getNoofpersons(), d.getTotalcharges(), d.getBookid());
			     book.add(bt);
			}
		   
		} else {
		    System.out.println("No data found for the given trekkId");
		}
		
		
		System.out.println("service "+book);
		return book;
	}

}
