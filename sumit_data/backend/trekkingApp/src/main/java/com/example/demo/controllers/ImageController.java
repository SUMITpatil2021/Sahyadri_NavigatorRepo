package com.example.demo.controllers;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Image;
import com.example.demo.services.ImageService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {

	

	    @Autowired
	    private ImageService imageService;

	    @PostMapping("/addImage")
	    public ResponseEntity<String> addImagePost(HttpServletRequest request, @RequestParam("image") MultipartFile file) throws IOException, SQLException {
	        try {
	            byte[] bytes = file.getBytes();
	            Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);

	            Image image = new Image();
//	            image.setImage(blob);
	            imageService.saveimage(image);

	            return new ResponseEntity<>("Image added successfully", HttpStatus.CREATED);
	        } catch (IOException | SQLException e) {
	            return new ResponseEntity<>("Failed to add image: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	        }

	    }
}
