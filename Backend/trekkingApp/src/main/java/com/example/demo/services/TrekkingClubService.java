package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.TrekkingClub;
import com.example.demo.entities.User;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.TrekkingClubRepository;

@Service
public class TrekkingClubService {
	
	@Autowired
	TrekkingClubRepository trepo;
	
	@Autowired
	LoginRepository lrepo;

	public TrekkingClub getByUname(String uname) {
		return trepo.getByName(uname);
	}

	public TrekkingClub saveUser(TrekkingClub club) {
		return trepo.save(club);
	}

	public List<TrekkingClub> getAll() {
		return trepo.findAll();
	}

	public void deleteClub(int clubid) {
		trepo.deleteById(clubid);		
	}

	public Login addtologin(Login clublogin) {
		Login loged = lrepo.save(clublogin);
		return loged;
	}

	//Return Trekking club object by using id
	public TrekkingClub getbyid(int clubid) {
		TrekkingClub club = trepo.findClub(clubid);
		return club;
	}

	//approve club
	public void updatestatus(String username, String password) {
		trepo.updateClub(username, password);
	}

	public String updateByName(String username, TrekkingClub tclub) {
		// TODO Auto-generated method stub
		int num = trepo.updateClubData(username, tclub.getName(), tclub.getOwnername(), tclub.getEmailid(), tclub.getContact());
		if(num != 0)
		  return "done";
		else return "not done";
	}
	
	
}
