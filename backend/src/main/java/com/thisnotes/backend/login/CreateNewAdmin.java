package com.thisnotes.backend.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Models.Admin;
import com.thisnotes.backend.Repositories.AdminsRepository;

@RestController
public class CreateNewAdmin {

	@Autowired
	AdminsRepository repo;
	
	@PostMapping("/newadmin")
	public boolean newAdmin() {
		Admin newadmin = new Admin();
		newadmin.setUser("admin");
		newadmin.setPassword("admin123");
		repo.save(newadmin);
		return true;
	}
}
