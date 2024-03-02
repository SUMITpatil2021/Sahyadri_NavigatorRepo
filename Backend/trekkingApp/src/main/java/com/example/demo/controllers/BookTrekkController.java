package com.example.demo.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookTrekk;
import com.example.demo.entities.TrekkDetails;
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
		TrekkDetails td = new TrekkDetails(book.getTrekkid());
		
		BookTrekk btrekk = new BookTrekk(book.getBookid(), book.getTrekkingpoint(), book.getTrekkname(), book.getCity(), book.getPickuppoint(), date, book.getCharges(), book.getNoofpersons(), book.getTotalcharges(), id, td);
		BookTrekk done = btservice.addTrekk(btrekk);
		
		System.out.println(done);
		 if(done == null)
	    	  return "Not added";
	       else return "Added";
	}
	
	 @GetMapping("/getbookingdata/{trekkId}")
	    public List<BookTrekkData> getbookingdataById(@PathVariable int trekkId) {
	    	System.out.println(trekkId);
	    	List<BookTrekkData> trekkDetails = btservice.getBookTrekkDetailsById(trekkId);
	    	System.out.println(trekkDetails);
			return trekkDetails;
	   }
	
}
