package com.example.demo.entities;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="trekkingclub")
public class TrekkingClub {
		
		public TrekkingClub(String name2, String ownername1, String email, String contactno, int licenseno1, Date edate1, 
				String username2, String password2 , Login clublogin) {
			name = name2;
			ownername = ownername1;
			emailid = email;
			contact = contactno;
			licenseno = licenseno1;
			edate = edate1;
			username = username2;
			password = password2;
			loginid = clublogin;
		}

		public TrekkingClub(String name2, String ownername2, String emailid2, String contact2) {
			name = name2;
			ownername = ownername2;
			emailid = emailid2;
			contact = contact2;
		}

		public TrekkingClub(int id) {
			clubid = id;
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
		
		@OneToOne
		@Cascade(value = CascadeType.ALL)
		@JoinColumn(name="loginid") // Assuming id is the primary key of Login entity
		Login loginid;

		@Override
		public String toString() {
			return "TrekkingClub [clubid=" + clubid + ", name=" + name + ", ownername=" + ownername + ", emailid="
					+ emailid + ", contact=" + contact + ", licenseno=" + licenseno + ", edate=" + edate + ", username="
					+ username + ", password=" + password + ", loginid=" + loginid + "]";
		}
		
		
		@OneToMany(mappedBy="clubid")
		@JsonIgnoreProperties("clubid")
		@Cascade(value = CascadeType.ALL)
		Set<TrekkDetails> trekkid;

		public TrekkingClub() {
			super();
			// TODO Auto-generated constructor stub
		}

		public TrekkingClub(int clubid, String name, String ownername, String emailid, String contact, int licenseno,
				Date edate, String username, String password, Login loginid, Set<TrekkDetails> trekkid) {
			super();
			this.clubid = clubid;
			this.name = name;
			this.ownername = ownername;
			this.emailid = emailid;
			this.contact = contact;
			this.licenseno = licenseno;
			this.edate = edate;
			this.username = username;
			this.password = password;
			this.loginid = loginid;
			this.trekkid = trekkid;
		}

		public int getClubid() {
			return clubid;
		}

		public void setClubid(int clubid) {
			this.clubid = clubid;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getOwnername() {
			return ownername;
		}

		public void setOwnername(String ownername) {
			this.ownername = ownername;
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

		public int getLicenseno() {
			return licenseno;
		}

		public void setLicenseno(int licenseno) {
			this.licenseno = licenseno;
		}

		public Date getEdate() {
			return edate;
		}

		public void setEdate(Date edate) {
			this.edate = edate;
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

		public Set<TrekkDetails> getTrekkid() {
			
			return trekkid;
		}

		public void setTrekkid(Set<TrekkDetails> trekkid) {
			for(TrekkDetails t:trekkid)
			this.trekkid = trekkid;
		}
		
		
		
		
	}
