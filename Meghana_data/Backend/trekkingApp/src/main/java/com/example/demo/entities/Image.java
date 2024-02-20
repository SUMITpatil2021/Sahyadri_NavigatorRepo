package com.example.demo.entities;

import java.sql.Blob;
import java.util.Arrays;

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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="image")

public class Image {

	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int imgid;
	
	@Lob
	@Column
	byte[] image;
	
	
	@OneToOne(mappedBy = "trekkimg",fetch = FetchType.LAZY)
	@Cascade(value = org.hibernate.annotations.CascadeType.ALL)
	TrekkDetails trekkid;

	public void setImage(byte[] bytes) {
		image=bytes;
		
	}

	public int getImgid() {
		return imgid;
	}

	public void setImgid(int imgid) {
		this.imgid = imgid;
	}

	public TrekkDetails getTrekkid() {
		return trekkid;
	}

	public void setTrekkid(TrekkDetails trekkid) {
		this.trekkid = trekkid;
	}

	public byte[] getImage() {
		return image;
	}

	@Override
	public String toString() {
		return "Image [imgid=" + imgid + ", image=" + Arrays.toString(image) + ", trekkid=" + trekkid + "]";
	}

	
	
}
