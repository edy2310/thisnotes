package com.thisnotes.backend.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class Login {

	private String user;
	private String pass;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public boolean authLogin(HttpServletRequest req, HttpServletResponse res) {
		this.user = req.getParameter("user");
		this.pass = req.getParameter("password");
		System.out.println(this.user + " : " + this.pass);
		if(this.user.equals("admin") && this.pass.equals("admin123"))
			return true;
		else
			return false;
	}
}
