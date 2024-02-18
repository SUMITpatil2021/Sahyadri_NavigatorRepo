package com.example.demo.entities;

import java.sql.Blob;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="trekk_details")

@AllArgsConstructor
@Getter
@Setter
@ToString
public class TrekkDetails {
	
	public TrekkDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrekkDetails(String trekkname2, TrekkLocation trekklocation, Date date2, double charges2, Facility facility,
			Image image) {
		  trekkname=trekkname2;
		  location = trekklocation;
		  date=date2;
		  charges=charges2;
		  facilities=facility;
		  trekkimg=image;
	}
	
	public TrekkDetails(int trekkid, String trekkname, double charges, Date date, User userid,
	        int locationid, String city, String trekkingpoint, String landmark,
	        String guidename, String trekkingpole, int facilityid, String food, String firstaid,
	        String transportation, String trainingprogram,
	        int imgid, byte[] image) {
	    
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int trekkid;
	
	@Column
	String trekkname;
	
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="locationid")
	TrekkLocation location;

	
	@Column
	 Date date = new Date();
	

	@Column
	double charges;
	
//	@JsonIgnoreProperties("trekkid")
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="facilityid")
	Facility facilities;

//	@JsonIgnoreProperties("trekkid")
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="imgid")
	Image trekkimg;
	
//	@JsonIgnoreProperties("trekkid")
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="userid")
	User userid;


}

















