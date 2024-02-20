package com.example.demo.entities;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class User {
	
	public User(String name2, String email, String contactno, String username2, String password2, Login loginuser) {
		name = name2;
		emailid = email;
		contact = contactno;
		username = username2;
		password = password2;
		loginid = loginuser;
	}

	public User(String name2, String username2, String emailid2, String contact2) {
		name = name2;
		emailid = emailid2;
		contact = contact2;
		username = username2;
	}

	public User(int userid2) {
		userid = userid2;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int userid;
	
	@Column
	String name;
	
	@Column
	String emailid;
	
	@Column
	String contact;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@JsonIgnoreProperties("userid")
	@OneToOne
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="loginid") // Assuming id is the primary key of Login entity
	Login loginid;
	
	@OneToOne(mappedBy="userid",fetch = FetchType.LAZY)
	@JsonIgnoreProperties("userid")
	@Cascade(value = CascadeType.ALL)
	BookTrekk bookid;
}
