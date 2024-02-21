package com.example.demo.entities;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="login")

public class Login {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int id;

		@Column
	    String username;
		
		@Column
	    String password;
		
		@JsonIgnoreProperties("loginid")
		@ManyToOne
		@JoinColumn(name="roleid")
	    Role roleid;
		
		@JsonIgnoreProperties("loginid")
		@OneToOne(mappedBy = "loginid", cascade = CascadeType.ALL)
		User userid;
		
		@Column
		int status;
		
		public String getPassword() {
			return password;
		}

		public Login(String username2, String password2, Role role, int state) {
			username = username2;
			password = password2;
			roleid = role;
			status = state;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public Role getRoleid() {
			return roleid;
		}

		public void setRoleid(Role roleid) {
			this.roleid = roleid;
		}

		public User getUserid() {
			return userid;
		}

		public void setUserid(User userid) {
			this.userid = userid;
		}

		public int getStatus() {
			return status;
		}

		public void setStatus(int status) {
			this.status = status;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public Login() {
			super();
			// TODO Auto-generated constructor stub
		}

		
		
}
