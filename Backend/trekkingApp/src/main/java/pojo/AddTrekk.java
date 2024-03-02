package pojo;



import java.sql.Blob;
import java.util.Arrays;
import java.util.Date;

import lombok.ToString;


public class AddTrekk {

	@Override
	public String toString() {
		return "AddTrekk [locationid=" + locationid + ", city=" + city + ", Trekkingpoint=" + Trekkingpoint
				+ ", landmark=" + landmark + ", date=" + date + ", charges=" + charges + ", trekkname=" + trekkname
				+ ", image=" + Arrays.toString(image) + ", guidename=" + guidename + ", trekkingpole=" + trekkingpole
				+ ", trainingprogram=" + trainingprogram + ", firstaid=" + firstaid + ", transportation="
				+ transportation + ", food=" + food + "]";
	}
	int locationid;
	String city;
	String Trekkingpoint;
	String landmark;
	Date date = new Date();
	double charges;
	String trekkname;
	byte[] image;
	String guidename;
	String trekkingpole;
	String trainingprogram;
	String firstaid;
	String transportation;
	String food;
	int clubid;
	
	public AddTrekk() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getLocationid() {
		return locationid;
	}
	public void setLocationid(int locationid) {
		this.locationid = locationid;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getTrekkingpoint() {
		return Trekkingpoint;
	}
	public void setTrekkingpoint(String trekkingpoint) {
		Trekkingpoint = trekkingpoint;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public double getCharges() {
		return charges;
	}
	public void setCharges(double charges) {
		this.charges = charges;
	}
	public String getTrekkname() {
		return trekkname;
	}
	public void setTrekkname(String trekkname) {
		this.trekkname = trekkname;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getGuidename() {
		return guidename;
	}
	public void setGuidename(String guidename) {
		this.guidename = guidename;
	}
	public String getTrekkingpole() {
		return trekkingpole;
	}
	public void setTrekkingpole(String trekkingpole) {
		this.trekkingpole = trekkingpole;
	}
	public String getTrainingprogram() {
		return trainingprogram;
	}
	public void setTrainingprogram(String trainingprogram) {
		this.trainingprogram = trainingprogram;
	}
	public String getFirstaid() {
		return firstaid;
	}
	public void setFirstaid(String firstaid) {
		this.firstaid = firstaid;
	}
	public String getTransportation() {
		return transportation;
	}
	public void setTransportation(String transportation) {
		this.transportation = transportation;
	}
	public String getFood() {
		return food;
	}
	public void setFood(String food) {
		this.food = food;
	}
	public int getClubid() {
		return clubid;
	}
	public void setClubid(int clubid) {
		this.clubid = clubid;
	}
	
}
