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
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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
}
