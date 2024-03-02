package com.example.demo.entities;

import java.sql.Blob;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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


	public TrekkDetails(int trekkid2) {
		trekkid = trekkid2;
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
	
	@ManyToOne
	@JoinColumn(name="clubid")
	@JsonIgnoreProperties("trekkid")
	TrekkingClub clubid;
	
	@OneToMany(mappedBy="trekkid",fetch = FetchType.LAZY)
	@JsonIgnoreProperties("trekkid")
	@Cascade(value = CascadeType.ALL)
	Set<BookTrekk> bookid;
	
	
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

	public Set<BookTrekk> getBookid() {
		
		return bookid;
	}

	public void setBookid(Set<BookTrekk> bookid) {
		for(BookTrekk b:bookid)
		this.bookid = bookid;
	}

	public TrekkDetails(int trekkid, String trekkname, TrekkLocation location, Date date, double charges,
			Facility facilities, Image trekkimg, TrekkingClub clubid, Set<BookTrekk> bookid) {
		super();
		this.trekkid = trekkid;
		this.trekkname = trekkname;
		this.location = location;
		this.date = date;
		this.charges = charges;
		this.facilities = facilities;
		this.trekkimg = trekkimg;
		this.clubid = clubid;
		this.bookid = bookid;
	}
	
	

}

















