package com.example.demo.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookTrekk;
import com.example.demo.entities.User;
import com.example.demo.services.BookTrekkService;

import pojo.BookTrekkData;
import pojo.CommonUser;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BookTrekkController {

	@Autowired
	BookTrekkService btservice;
	
	@PostMapping("/bookTrekk")
    public String login(@RequestBody BookTrekkData book) {
		
		System.out.println(book);
		
		Date date = new Date();
		date = book.getDate();
		User id = new User(book.getUserid());
		
		BookTrekk btrekk = new BookTrekk(book.getBookid(), book.getTrekkingpoint(), book.getTrekkname(), book.getCity(), book.getPickuppoint(), date, book.getCharges(), book.getNoofpersons(), book.getTotalcharges(), id);
		BookTrekk done = btservice.addTrekk(btrekk);
		
		System.out.println(done);
		 if(done == null)
	    	  return "Not added";
	       else return "Added";
	}
	
}
