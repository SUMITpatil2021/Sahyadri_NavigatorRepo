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
			
			private String ownername;	
			private int licenseno;
			private Date edate;
			
			public CommonUser(String name, String emailid, String contact, String password, String username,
					String roletype, int loginid, int roleid ,int status) {
				super();
				this.name = name;
				this.emailid = emailid;
				this.contact = contact;
				this.password = password;
				this.username = username;
				this.roletype = roletype;
				this.loginid = loginid;
				this.roleid = roleid;
				this.status=status;
			}	

			
}
