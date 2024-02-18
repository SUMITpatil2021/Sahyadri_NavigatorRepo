package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.entities.TrekkDetails;
import com.example.demo.repositories.TrekkDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.List;
import java.util.Optional;

@Service
public class TrekkDetailsService {
	
	@Autowired
    TrekkDetailsRepository trekkDetailsRepository;

    public List<TrekkDetails> getAllTrekkDetails() {
        return trekkDetailsRepository.findAllTrekkDetails();
    }


    public Optional<TrekkDetails> getTrekkDetailsById(int id) {
        return trekkDetailsRepository.findById(id);
    }
    
    public TrekkDetails saveTrekkDetails(TrekkDetails trekkDetails) {
        return trekkDetailsRepository.save(trekkDetails);
    }

    
   
}

