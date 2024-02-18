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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="facilities")
@Getter
@Setter
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
	
	@JsonIgnoreProperties("facilities")
	@OneToOne(mappedBy="facilities",fetch = FetchType.LAZY)
	TrekkDetails trekkid;

}
