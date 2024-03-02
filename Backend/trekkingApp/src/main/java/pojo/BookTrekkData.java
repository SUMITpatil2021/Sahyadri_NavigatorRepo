package pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.example.demo.entities.User;

public class BookTrekkData {

		int bookid;
		String trekkname;
	   String trekkingpoint;
	   String city; 
	   String pickuppoint;
	   Date date=new Date();	   
	   int noofpersons;	   
	   double charges;
	   double totalcharges;
		int userid;
		
		
		String uname;
		int trekkid;
		
		
		public String getUname() {
			return uname;
		}
		public void setUname(String uname) {
			this.uname = uname;
		}
		public int getTrekkid() {
			return trekkid;
		}
		public void setTrekkid(int trekkid) {
			this.trekkid = trekkid;
		}
		public BookTrekkData() {
			super();
			// TODO Auto-generated constructor stub
		}
		public BookTrekkData(int bookid, String trekkname, String trekkingpoint, String city, String pickuppoint,
				Date date, int noofpersons, double charges, double totalcharges, int userid) {
			super();
			this.bookid = bookid;
			this.trekkname = trekkname;
			this.trekkingpoint = trekkingpoint;
			this.city = city;
			this.pickuppoint = pickuppoint;
			this.date = date;
			this.noofpersons = noofpersons;
			this.charges = charges;
			this.totalcharges = totalcharges;
			this.userid = userid;
		}
		
		
		public BookTrekkData(int bookid, String trekkname, String trekkingpoint, String city, String pickuppoint,
				Date date, int noofpersons, double charges, double totalcharges, int userid, String uname,
				int trekkid) {
			super();
			this.bookid = bookid;
			this.trekkname = trekkname;
			this.trekkingpoint = trekkingpoint;
			this.city = city;
			this.pickuppoint = pickuppoint;
			this.date = date;
			this.noofpersons = noofpersons;
			this.charges = charges;
			this.totalcharges = totalcharges;
			this.userid = userid;
			this.uname = uname;
			this.trekkid = trekkid;
		}
		
		public BookTrekkData(String name, int noofpersons2, double totalcharges2) {
			this.noofpersons = noofpersons2;
			this.totalcharges = totalcharges2;
			this.uname = name;
		}
		
		public BookTrekkData(String name, int noofpersons2, double totalcharges2, int bookid2) {
			this.noofpersons = noofpersons2;
			this.totalcharges = totalcharges2;
			this.uname = name;
			bookid = bookid2;
		}
		@Override
		public String toString() {
			return "BookTrekkData [bookid=" + bookid + ", trekkname=" + trekkname + ", trekkingpoint=" + trekkingpoint
					+ ", city=" + city + ", pickuppoint=" + pickuppoint + ", date=" + date + ", noofpersons="
					+ noofpersons + ", charges=" + charges + ", totalcharges=" + totalcharges + ", userid=" + userid
					+ "]";
		}
		
		
		public int getBookid() {
			return bookid;
		}
		public void setBookid(int bookid) {
			this.bookid = bookid;
		}
		public String getTrekkname() {
			return trekkname;
		}
		public void setTrekkname(String trekkname) {
			this.trekkname = trekkname;
		}
		public String getTrekkingpoint() {
			return trekkingpoint;
		}
		public void setTrekkingpoint(String trekkingpoint) {
			this.trekkingpoint = trekkingpoint;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getPickuppoint() {
			return pickuppoint;
		}
		public void setPickuppoint(String pickuppoint) {
			this.pickuppoint = pickuppoint;
		}
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
		public int getNoofpersons() {
			return noofpersons;
		}
		public void setNoofpersons(int noofpersons) {
			this.noofpersons = noofpersons;
		}
		public double getCharges() {
			return charges;
		}
		public void setCharges(double charges) {
			this.charges = charges;
		}
		public double getTotalcharges() {
			return totalcharges;
		}
		public void setTotalcharges(double totalcharges) {
			this.totalcharges = totalcharges;
		}
		public int getUserid() {
			return userid;
		}
		public void setUserid(int userid) {
			this.userid = userid;
		}
		
		
}
