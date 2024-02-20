package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BookTrekk;
import com.example.demo.repositories.BookTrekkRepository;

@Service
public class BookTrekkService {
	
	@Autowired
	BookTrekkRepository brepo;

	public BookTrekk addTrekk(BookTrekk book) {
		return brepo.save(book);
	}

}
