package com.thisnotes.backend.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Parent {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String email;
	private String password;
	private String originalKey;
	private int studentKey;
	
	public Parent() {}

	public Parent(Integer id, String email, String password, String originalKey, int studentKey) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.originalKey = originalKey;
		this.studentKey = studentKey;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOriginalKey() {
		return originalKey;
	}

	public void setOriginalKey(String originalKey) {
		this.originalKey = originalKey;
	}

	public int getStudentKey() {
		return studentKey;
	}

	public void setStudentKey(int studentKey) {
		this.studentKey = studentKey;
	}

	
	
	
}
