package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Facility;
import com.example.demo.services.FacilityService;

@RestController
public class FacilityController {

	@Autowired 
	FacilityService fservice;
	
	@GetMapping("/getAll")
	public List<Facility> getAll()
	{
		List<Facility> facility= fservice.getAll();
		System.out.println(facility);
		return facility;
	}
}
