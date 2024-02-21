package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TrekkDetails;
import com.example.demo.entities.TrekkLocation;
import com.example.demo.entities.TrekkingClub;
import com.example.demo.repositories.TrekkLocationRepository;

@Service
public class TrekkLocationService {

	@Autowired
	TrekkLocationRepository trepo;
	
	 public TrekkLocation saveTrekkDetails(TrekkLocation trekklocation) {
	        return trepo.save(trekklocation);
	    }
	 
	 public List<TrekkLocation> getAll() {
			return trepo.findAll();
		}
}
