package com.thisnotes.backend.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String firstName;
	private String lastName;
	private String level;
	private String grade;
	private String parentKey;
		
	public Student() {}

	public Student(Integer id, String firstName, String lastName, String level, String grade, String parentKey) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.level = level;
		this.grade = grade;
		this.parentKey = parentKey;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getParentKey() {
		return parentKey;
	}
	public void setParentKey(String parentKey) {
		this.parentKey = parentKey;
	}

}
