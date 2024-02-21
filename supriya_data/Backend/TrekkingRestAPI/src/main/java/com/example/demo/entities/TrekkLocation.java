package com.example.demo.entities;

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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="trekklocation")
public class TrekkLocation {

	public TrekkLocation() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int locationid;
	
	@Column
	String city;
	
	@Column
	String trekkingpoint;
	
	@Column
	String landmark;
	
	@JsonIgnoreProperties("location")
	@OneToOne(mappedBy="location",fetch = FetchType.LAZY)
	TrekkDetails trekkid;
	
	public TrekkLocation(String city, String trekkingpoint, String landmark)
	{
		this.city=city;
		this.trekkingpoint=trekkingpoint;
		this.landmark=landmark;
	}

	public int getLocationid() {
		return locationid;
	}

	public void setLocationid(int locationid) {
		this.locationid = locationid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getTrekkingpoint() {
		return trekkingpoint;
	}

	public void setTrekkingpoint(String trekkingpoint) {
		this.trekkingpoint = trekkingpoint;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public TrekkDetails getTrekkid() {
		return trekkid;
	}

	public void setTrekkid(TrekkDetails trekkid) {
		this.trekkid = trekkid;
	}

	@Override
	public String toString() {
		return "TrekkLocation [locationid=" + locationid + ", city=" + city + ", trekkingpoint=" + trekkingpoint
				+ ", landmark=" + landmark + ", trekkid=" + trekkid + "]";
	}
	
	
}
