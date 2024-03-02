package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="bookedtrekk")
public class BookTrekk {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int bookid;
	
   @Column
   String trekkname;
   
   @Column
   String trekkingpoint;
   
   @Column
   String city;
   
   @Column
   String pickuppoint;
   
   @Column
   Date date=new Date();
   
   @Column
   int noofpersons;
   
   @Column
   double charges;
   
   @Column
   double totalcharges;
   
    @ManyToOne
	@JoinColumn(name="userid")
   // @Cascade(value = org.hibernate.annotations.CascadeType.ALL)
    @JsonIgnoreProperties("bookid")
	User userid;
    
    @ManyToOne
    @Cascade(value = org.hibernate.annotations.CascadeType.ALL)
   	@JoinColumn(name="trekkid")
    @JsonIgnoreProperties("bookid")
    TrekkDetails trekkid;

public BookTrekk() {
		super();
		// TODO Auto-generated constructor stub
	}

public BookTrekk(int bookid, String trekkname, String trekkingpoint, String city, String pickuppoint, Date date,
		int noofpersons, double charges, double totalcharges, User userid) {
	super();
	this.bookid = bookid;
	this.trekkname = trekkname;
	this.trekkingpoint = trekkingpoint;
	this.city = city;
	this.pickuppoint = pickuppoint;
	this.date = date;
	this.noofpersons = noofpersons;
	this.charges = charges;
	this.totalcharges = totalcharges;
	this.userid = userid;
}



public BookTrekk(int bookid, String trekkingpoint, String trekkname, String city, String pickuppoint, Date date,
		double charges, int noofpersons, double totalcharges, User userid, TrekkDetails td) {
	super();
	this.bookid = bookid;
	this.trekkname = trekkname;
	this.trekkingpoint = trekkingpoint;
	this.city = city;
	this.pickuppoint = pickuppoint;
	this.date = date;
	this.noofpersons = noofpersons;
	this.charges = charges;
	this.totalcharges = totalcharges;
	this.userid = userid;
	trekkid = td;
	
}



public int getBookid() {
	return bookid;
}

public void setBookid(int bookid) {
	this.bookid = bookid;
}

public String getTrekkname() {
	return trekkname;
}

public void setTrekkname(String trekkname) {
	this.trekkname = trekkname;
}

public String getTrekkingpoint() {
	return trekkingpoint;
}

public void setTrekkingpoint(String trekkingpoint) {
	this.trekkingpoint = trekkingpoint;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getPickuppoint() {
	return pickuppoint;
}

public void setPickuppoint(String pickuppoint) {
	this.pickuppoint = pickuppoint;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public int getNoofpersons() {
	return noofpersons;
}

public void setNoofpeopel(int noofperson) {
	this.noofpersons = noofperson;
}

public double getCharges() {
	return charges;
}

public void setCharges(double charges) {
	this.charges = charges;
}

public double getTotalcharges() {
	return totalcharges;
}

public void setTotalcharges(double totalcharges) {
	this.totalcharges = totalcharges;
}

@Override
public String toString() {
	return "BookTrekk [bookid=" + bookid + ", trekkname=" + trekkname + ", trekkingpoint=" + trekkingpoint + ", city="
			+ city + ", pickuppoint=" + pickuppoint + ", date=" + date + ", noofpersons=" + noofpersons + ", charges="
			+ charges + ", totalcharges=" + totalcharges + "]";
}

public User getUserid() {
	return userid;
}

public void setUserid(User userid) {
	this.userid = userid;
}

public TrekkDetails getTrekkid() {
	return trekkid;
}

public void setTrekkid(TrekkDetails trekkid) {
	this.trekkid = trekkid;
}

public void setNoofpersons(int noofpersons) {
	this.noofpersons = noofpersons;
}
   
}
