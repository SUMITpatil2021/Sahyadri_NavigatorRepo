//package com.example.demo.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailMessage;
////import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//
//import com.example.demo.entities.TrekkingClub;
//import com.example.demo.entities.User;
//import com.example.demo.pojo.CommonUser;
//import com.example.demo.services.EnquiryService;
//import com.example.demo.services.UserService;
//
//@RestController
//public class EnquiryController {
//
//	 @Autowired
//     JavaMailSender sender;
//	 
//	 @Autowired
//	 EnquiryService eservice;
//	 
//	 @Autowired
//	 UserService userService;
//	 
//	 @PostMapping("/enquiry")
//	 public boolean saveEquiry(@RequestBody Enquiry enquiry,@RequestParam("username") String username) {
//	    	System.out.println(enquiry);
//	    	
//	    	Enquiry enq=eservice.saveEnquiry(enquiry);
//	    	User user=userService.getUname(username);
//	    	  
//	    	  
//	      	boolean flag=true;
//	      	try {
//	      		TrekkingClub tclub=new TrekkingClub(enquiry.getEmailid());
////	      		User user1=new User(enquiry.getEmailid());
//	            Enquiry enq1=eservice.saveEnquiry(enquiry);
//	            SimpleMailMessage mailMsg=new SimpleMailMessage();
//	            MailMessage msg=new MailMessage();
//	          	mailMsg.setFrom(user.getEmailid());
//	          	mailMsg.setTo();
//	          	mailMsg.setSubject("Test Mail");
//	          	mailMsg.setText("Hello i am xyz from knowit pune");
//	          	sender.send(mailMsg);
//	          	 // return "User Registered and Verification Email Sent";
//	          	}
//	      	catch(Exception e)
//	      	{
//	      	flag=false;
//	      	}
//	      	return flag;
//	      	
//	      
//	 }
//	 
//}
//	 
//
