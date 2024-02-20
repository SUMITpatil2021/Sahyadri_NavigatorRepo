package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Image;
import com.example.demo.entities.TrekkLocation;
import com.example.demo.repositories.ImageRepository;

@Service
public class ImageService {

	    @Autowired
	    ImageRepository imageRepository;

	    
	    public Image saveimage(Image image) {
	        return imageRepository.save(image);
	    }
	   
	    public List<Image> getAll() {
			return imageRepository.findAll();
		}
}
