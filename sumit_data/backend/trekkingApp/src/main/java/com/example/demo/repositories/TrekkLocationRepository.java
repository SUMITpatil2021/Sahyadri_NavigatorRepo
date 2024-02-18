package com.example.demo.repositories;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrekkLocation;

@Repository
@Transactional
public interface TrekkLocationRepository extends JpaRepository<TrekkLocation, Integer> {

}
