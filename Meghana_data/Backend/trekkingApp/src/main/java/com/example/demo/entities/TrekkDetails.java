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

@Entity
@Table(name="trekk_details")


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
	

	public TrekkDetails(String trekkname2, TrekkLocation trekklocation, Date date2, double charges2, Facility facility,
			Image image, TrekkingClub club) {
		trekkname=trekkname2;
		  location = trekklocation;
		  date=date2;
		  charges=charges2;
		  facilities=facility;
		  trekkimg=image;
		  clubid = club;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int trekkid;
	
	@Column
	String trekkname;
	
	@JsonIgnoreProperties("trekkid")
	@OneToOne(fetch = FetchType.EAGER)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="locationid")
	TrekkLocation location;

	
	@Column
	 Date date = new Date();
	

	@Column
	double charges;
	
	@JsonIgnoreProperties("trekkid")
	@OneToOne(fetch = FetchType.EAGER)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="facilityid")
	Facility facilities;

	@JsonIgnoreProperties("trekkid")
	@OneToOne(fetch = FetchType.EAGER)
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="imgid")
	Image trekkimg;
	
	@OneToOne
	@JoinColumn(name="clubid")
	TrekkingClub clubid;

	public int getTrekkid() {
		return trekkid;
	}

	public void setTrekkid(int trekkid) {
		this.trekkid = trekkid;
	}

	public String getTrekkname() {
		return trekkname;
	}

	public void setTrekkname(String trekkname) {
		this.trekkname = trekkname;
	}

	public TrekkLocation getLocation() {
		return location;
	}

	public void setLocation(TrekkLocation location) {
		this.location = location;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getCharges() {
		return charges;
	}

	public void setCharges(double charges) {
		this.charges = charges;
	}

	public Facility getFacilities() {
		return facilities;
	}

	public void setFacilities(Facility facilities) {
		this.facilities = facilities;
	}

	public Image getTrekkimg() {
		return trekkimg;
	}

	public void setTrekkimg(Image trekkimg) {
		this.trekkimg = trekkimg;
	}

	public TrekkingClub getClubid() {
		return clubid;
	}

	public void setClubid(TrekkingClub clubid) {
		this.clubid = clubid;
	}

	@Override
	public String toString() {
		return "TrekkDetails [trekkid=" + trekkid + ", trekkname=" + trekkname + ", location=" + location + ", date="
				+ date + ", charges=" + charges + ", facilities=" + facilities + ", trekkimg=" + trekkimg + ", clubid="
				+ clubid + "]";
	}

}

















