package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.TrekkingClub;
import com.example.demo.pojo.CommonUser;
import com.example.demo.services.TrekkingClubService;



@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TrekkerClubController {
	
	@Autowired
	TrekkingClubService tservice;
	
	@PostMapping("/clubregister")
	public String saveClub(@RequestBody CommonUser user) {
    	System.out.println(user);
    	
    	Role role = new Role(user.getRoleid(), user.getRoletype());
		Login clublogin = new Login(user.getUsername(), user.getPassword(), role, user.getStatus());
		Login clublogged = tservice.addtologin(clublogin);
    	
		
    	//Trekking club entity object
    	TrekkingClub club = new TrekkingClub(user.getName(), user.getOwnername(), user.getEmailid(), user.getContact(), user.getLicenseno(), user.getEdate() ,user.getUsername(),user.getPassword(),clublogin);
    	 
    	
    	//For checking username exit or not
    	String uname = club.getUsername();
    	TrekkingClub newclub = tservice.getByUname(uname);
    	
    	
    	if(newclub == null) {
    		TrekkingClub savedClub = tservice.saveUser(club);
        	System.out.println(savedClub);
   
        	if(savedClub == null)
        		return "Registration Failed";
        	else
        		return "Club Registered";
    	}
    	else return "Already used";
	}
	
	
	
	@GetMapping("/approve")
	public String approve(@RequestParam("clubid") int Clubid) {
		
		TrekkingClub club = tservice.getbyid(Clubid);
		
		tservice.updatestatus(club.getUsername(), club.getPassword());
		return "Approved";
		
	}
	
	@GetMapping("/getallclubs")
	public List<TrekkingClub> getAllClub()
	{
		return tservice.getAll();	
	}
    
    @DeleteMapping("/deleteclub")
    public void deleteClub(@RequestParam("clubid") int Clubid)
    {
    	tservice.deleteClub(Clubid);
    }
    
    @GetMapping("/fetchclubdata/{username}")
	public TrekkingClub sendClubData(@PathVariable String username)
	{
		TrekkingClub club =  tservice.getByUname(username);	
		System.out.println(club);
		return club;
	}
       
       @PutMapping("/updateclubdata/{username}")
       public String updateClubData(@PathVariable("username") String username, @RequestBody CommonUser user) {
   		System.out.println(user);
       	TrekkingClub tclub = new TrekkingClub(user.getName(), user.getOwnername(), user.getEmailid(), user.getContact());
       	System.out.println(tclub);
   		return tservice.updateByName(username, tclub);	
   	}

}
