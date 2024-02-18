package com.example.demo.entities;

import java.util.Date;

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
@Table(name="trekkingclub")
public class TrekkingClub {
		
		public TrekkingClub(String name2, String ownername1, String email, String contactno, int licenseno1, Date edate1, 
				String username2, String password2,Login loginid) {
			name = name2;
			ownername = ownername1;
			emailid = email;
			contact = contactno;
			licenseno = licenseno1;
			edate = edate1;
			username = username2;
			password = password2;
			this.loginid=loginid;
		}
		
		public TrekkingClub(String name2, String ownername2, String emailid2, String contact2) {
			name = name2;
			ownername = ownername2;
			emailid = emailid2;
			contact = contact2;
		}

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int clubid;
		
		@Column
		String name;
		
		@Column
		String ownername;
		
		@Column
		String emailid;
		
		@Column
		String contact;
		
		@Column
		int licenseno;
		
		@Column
		Date edate;
		
		@Column
		String username;
		
		@Column
		String password;
		
		
		@JsonIgnoreProperties("loginid")
		@OneToOne
		@Cascade(value = CascadeType.ALL)
		@JoinColumn(name="loginid") // Assuming id is the primary key of Login entity
		Login loginid;
	}
