package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity

@Table(name="role")
public class Role {

	
	@Id
	int roleid;
	
	@Column
	String roletype;
	
	

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int roleid, String roletype) {
		super();
		this.roleid = roleid;
		this.roletype = roletype;
	}

	public int getRoleid() {
		return roleid;
	}

	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}

	public String getRoletype() {
		return roletype;
	}

	public void setRoletype(String roletype) {
		this.roletype = roletype;
	}
	
	
}