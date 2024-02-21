package com.example.demo.pojo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommonUser {

			private String name;
			private String emailid;
			private String contact;
			private String password;
			private String username;
			private String roletype;
			private int loginid;
			private int roleid;	
			private int status;	
			
			int clubid;
			private String ownername;	
			private int licenseno;
			private Date edate;
			
			public CommonUser(String name, String emailid, String contact, String password, String username,
					String roletype, int loginid, int roleid, int state) {
				super();
				this.name = name;
				this.emailid = emailid;
				this.contact = contact;
				this.password = password;
				this.username = username;
				this.roletype = roletype;
				this.loginid = loginid;
				this.roleid = roleid;
				status = state;
			}		
			
			public CommonUser(int roleid, int state, int id) {
				this.roleid = roleid;
				status = state;
				clubid = id;
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

			public String getPassword() {
				return password;
			}

			public void setPassword(String password) {
				this.password = password;
			}

			public String getUsername() {
				return username;
			}

			public void setUsername(String username) {
				this.username = username;
			}

			public String getRoletype() {
				return roletype;
			}

			public void setRoletype(String roletype) {
				this.roletype = roletype;
			}

			public int getLoginid() {
				return loginid;
			}

			public void setLoginid(int loginid) {
				this.loginid = loginid;
			}

			public int getRoleid() {
				return roleid;
			}

			public void setRoleid(int roleid) {
				this.roleid = roleid;
			}

			public int getStatus() {
				return status;
			}

			public void setStatus(int status) {
				this.status = status;
			}

			public int getClubid() {
				return clubid;
			}

			public void setClubid(int clubid) {
				this.clubid = clubid;
			}

			public String getOwnername() {
				return ownername;
			}

			public void setOwnername(String ownername) {
				this.ownername = ownername;
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
			
			
}
