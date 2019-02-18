package com.thisnotes.backend.Models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Admins {
	
	@Id
	public ObjectId id;
	
	public String user;
	public String password;
	
	public Admins() {
		
	}
	
	public Admins(ObjectId id, String user, String password) {
		super();
		this.id = id;
		this.user = user;
		this.password = password;
	}
	
	public String getId() {
		return id.toHexString();
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
