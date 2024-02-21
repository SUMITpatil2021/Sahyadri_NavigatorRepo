package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Facility;

@Repository
@Transactional
public interface FacilityRepository extends JpaRepository<Facility, Integer> {

}
