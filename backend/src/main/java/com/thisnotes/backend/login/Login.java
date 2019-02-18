package com.thisnotes.backend.login;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Repositories.AdminsRepository;
import com.thisnotes.backend.jwt.GenerateJWT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.thisnotes.backend.Models.Admins;

@RestController
public class Login {

	private String user;
	private String pass;
	
	@Autowired
	private AdminsRepository repo;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public Map<String, String> authLogin(HttpServletRequest req, HttpServletResponse res) throws IllegalArgumentException, UnsupportedEncodingException {
		this.user = req.getParameter("user");
		this.pass = req.getParameter("password");
		
		Map<String, String> finalResponse = new HashMap<String, String>();
		
		List<Admins> allAdmins = repo.findAll();
		System.out.println(allAdmins);
		
		if(this.user.equals("admin") && this.pass.equals("admin123")) {
			String jwt = GenerateJWT.generate();
			finalResponse.put("permission", "true");
			finalResponse.put("jwt", jwt);
			return finalResponse;
		}
		else {
			finalResponse.put("permission", "false");
			return finalResponse;
		}
	}
	
}
