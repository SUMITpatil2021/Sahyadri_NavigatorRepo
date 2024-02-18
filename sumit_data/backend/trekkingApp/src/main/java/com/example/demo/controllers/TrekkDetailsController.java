package com.example.demo.controllers;

import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Facility;
import com.example.demo.entities.Image;
import com.example.demo.entities.TrekkDetails;
import com.example.demo.entities.TrekkLocation;
import com.example.demo.pojo.AddTrekk;
import com.example.demo.services.FacilityService;
import com.example.demo.services.ImageService;
import com.example.demo.services.TrekkDetailsService;
import com.example.demo.services.TrekkLocationService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TrekkDetailsController {

	@Autowired
	TrekkDetailsService tdService;

	@Autowired
	ImageService iservice;
   
	@Autowired
	FacilityService fservice;
	
	@Autowired
	TrekkLocationService tlservice;

    @PostMapping("/addTrekk")
    public String saveTrekkDetails(@RequestBody AddTrekk addtrekk) throws SerialException, SQLException, IOException{
    	       
	            byte[] bytes = addtrekk.getImage();
	            Image image = new Image();
	            image.setImage(bytes);
	            iservice.saveimage(image);

	            
       System.out.println(addtrekk);
       TrekkLocation trekklocation=new TrekkLocation(addtrekk.getCity(),addtrekk.getTrekkingpoint(), addtrekk.getLandmark());
        tlservice.saveTrekkDetails(trekklocation);
       
       Facility facility=new Facility(addtrekk.getGuidename(), addtrekk.getTrekkingpole(),addtrekk.getTrainingprogram(), addtrekk.getTransportation(),addtrekk.getFirstaid(), addtrekk.getFood());
       fservice.save(facility);
       
       TrekkDetails treDetails=new TrekkDetails(addtrekk.getTrekkname(),trekklocation,addtrekk.getDate(),addtrekk.getCharges(),facility,image);
       
       TrekkDetails td =  tdService.saveTrekkDetails(treDetails);
       if(td == null)
    	  return "Not added";
       else return "Added";
    }
    
    @GetMapping("/getAllTrekkDetails")
    public List<TrekkDetails> getAllTrekkDetails() {
        return tdService.getAllTrekkDetails();
    }

    
    

}