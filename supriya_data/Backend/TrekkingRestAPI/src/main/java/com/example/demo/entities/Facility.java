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

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="facilities")

public class Facility {

	public Facility() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Facility [facilityid=" + facilityid + ", guidename=" + guidename + ", trekkingpole=" + trekkingpole
				+ ", trainingprogram=" + trainingprogram + ", firstaid=" + firstaid + ", transportation="
				+ transportation + ", food=" + food + ", trekkid=" + trekkid + "]";
	}

	public Facility(String guidename,String trekkingpole2, String transportation2, String trainingprogram2, String firstaid2,
			String food2) {
		this.guidename=guidename;
		trekkingpole=trekkingpole2;
		transportation=transportation2;
		trainingprogram=trainingprogram2;
		firstaid=firstaid2;
		food=food2;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int facilityid;
	
	@Column
	String guidename;
	
	@Column
	String trekkingpole;
	
	@Column
	String trainingprogram;
	
	@Column
	String firstaid;
	
	@Column
	String transportation;
	
	@Column
	String food;
	
	
	@OneToOne(mappedBy="facilities",fetch = FetchType.LAZY)
	TrekkDetails trekkid;


	public int getFacilityid() {
		return facilityid;
	}

	public void setFacilityid(int facilityid) {
		this.facilityid = facilityid;
	}

	public String getGuidename() {
		return guidename;
	}

	public void setGuidename(String guidename) {
		this.guidename = guidename;
	}

	public String getTrekkingpole() {
		return trekkingpole;
	}

	public void setTrekkingpole(String trekkingpole) {
		this.trekkingpole = trekkingpole;
	}

	public String getTrainingprogram() {
		return trainingprogram;
	}

	public void setTrainingprogram(String trainingprogram) {
		this.trainingprogram = trainingprogram;
	}

	public String getFirstaid() {
		return firstaid;
	}

	public void setFirstaid(String firstaid) {
		this.firstaid = firstaid;
	}

	public String getTransportation() {
		return transportation;
	}

	public void setTransportation(String transportation) {
		this.transportation = transportation;
	}

	public String getFood() {
		return food;
	}

	public void setFood(String food) {
		this.food = food;
	}

	public TrekkDetails getTrekkid() {
		return trekkid;
	}

	public void setTrekkid(TrekkDetails trekkid) {
		this.trekkid = trekkid;
	}

	
}
