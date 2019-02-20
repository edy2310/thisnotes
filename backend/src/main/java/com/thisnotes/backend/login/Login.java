package com.thisnotes.backend.login;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Models.Admin;
import com.thisnotes.backend.Repositories.AdminsRepository;
import com.thisnotes.backend.jwt.GenerateJWT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class Login {

	private String user;
	private String pass;
	
	@Autowired
	private AdminsRepository repo;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public Map<String, String> authLogin(HttpServletRequest req) throws IllegalArgumentException, UnsupportedEncodingException {
		this.user = req.getParameter("user");
		this.pass = req.getParameter("password");
		
		Map<String, String> finalResponse = new HashMap<String, String>();
	
		List<Admin> admins = (List<Admin>) repo.findAll();
		if(admins == null) {
			finalResponse.put("permission", "false");
			finalResponse.put("msg", "No admins record");
			return finalResponse;
		}
		else {
			for(Admin admin : admins) {
				String adminUser = admin.getUser();
				String adminPassword = admin.getPassword();
				if(this.user.equals(adminUser) && this.pass.equals(adminPassword)) {
					String jwt = GenerateJWT.generate();
					finalResponse.put("permission", "true");
					finalResponse.put("jwt", jwt);
					return finalResponse;
				}
			}
			finalResponse.put("permission", "false");
			return finalResponse;
			
		}		
	}
	
}
