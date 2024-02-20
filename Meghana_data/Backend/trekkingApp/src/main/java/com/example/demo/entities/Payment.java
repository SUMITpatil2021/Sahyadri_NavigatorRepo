package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int paymentid;
	
	@Column
	String trekkername;
	
	@Column
	Date paymentdate=new Date();
	
	@Column
	int noofpersons;
	
	@Column
	double totalcharges;
	
	@Column
	boolean paymentstatus;
}
