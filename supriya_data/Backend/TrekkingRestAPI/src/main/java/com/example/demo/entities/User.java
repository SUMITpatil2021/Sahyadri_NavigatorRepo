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

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	public BookTrekk getBookid() {
		return bookid;
	}

	public void setBookid(BookTrekk bookid) {
		this.bookid = bookid;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public User(int userid, String name, String emailid, String contact, String username, String password,
			Login loginid, BookTrekk bookid) {
		super();
		this.userid = userid;
		this.name = name;
		this.emailid = emailid;
		this.contact = contact;
		this.username = username;
		this.password = password;
		this.loginid = loginid;
		this.bookid = bookid;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", name=" + name + ", emailid=" + emailid + ", contact=" + contact
				+ ", username=" + username + ", password=" + password + ", loginid=" + loginid + ", bookid=" + bookid
				+ "]";
	}
	
	
}
