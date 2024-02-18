package com.example.demo.entities;

import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="image")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Image {

	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int imgid;
	
	@Lob
	@Column
	byte[] image;
	
	
	@JsonIgnoreProperties("trekkimg")
	@OneToOne(mappedBy = "trekkimg",fetch = FetchType.LAZY)
	@Cascade(value = org.hibernate.annotations.CascadeType.ALL)
	TrekkDetails trekkid;

	public void setImage(byte[] bytes) {
		image=bytes;
		
	}

	
	
}
