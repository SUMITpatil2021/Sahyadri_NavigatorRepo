package com.example.demo.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Facility;
import com.example.demo.entities.TrekkDetails;
import com.example.demo.repositories.FacilityRepository;
@Service
public class FacilityService {
	@Autowired
	FacilityRepository frepo;
	
	 public Facility save(Facility facilities) {
	        return frepo.save(facilities);
	    }
}
