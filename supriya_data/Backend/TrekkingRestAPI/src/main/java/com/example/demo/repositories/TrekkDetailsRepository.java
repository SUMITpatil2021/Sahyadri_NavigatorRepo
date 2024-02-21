package com.example.demo.repositories;

import java.sql.Blob;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrekkDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.TrekkDetails;

@Repository
@Transactional
public interface TrekkDetailsRepository extends JpaRepository<TrekkDetails, Integer> {

	
	@Query(value="select t.trekkid, t.trekkname, t.charges,t.date ,t.clubid,"
			+ "tl.locationid,tl.city,tl.trekkingpoint,"
			+ "tl.landmark,f.guidename,f.trekkingpole,"
			+ "f.facilityid,f.food,f.firstaid,f.transportation, f.trainingprogram,"
			+ "i.imgid,i.image "
			+ "from trekk_details t "
			+ "join trekklocation tl "
			+ "on tl.locationid=t.locationid "
			+ "join facilities f"
			+ " on f.facilityid=t.facilityid"
			+ " join image i "
			+ "on i.imgid=t.imgid"
			,nativeQuery=true)
	public List<TrekkDetails> findAllTrekkDetails();
	
	@Query(value = "SELECT t.trekkid, t.trekkname, t.charges, t.date, t.clubid, "
	        + "tl.locationid, tl.city, tl.trekkingpoint, "
	        + "tl.landmark, f.guidename, f.trekkingpole, "
	        + "f.facilityid, f.food, f.firstaid, f.transportation, f.trainingprogram, "
	        + "i.imgid, i.image "
	        + "FROM trekk_details t "
	        + "JOIN trekklocation tl ON tl.locationid = t.locationid "
	        + "JOIN facilities f ON f.facilityid = t.facilityid "
	        + "JOIN image i ON i.imgid = t.imgid "
	        + "WHERE t.trekkid = :trekkId", nativeQuery = true)
	public TrekkDetails  getTrekkDetailsById( int trekkId);

	
}
