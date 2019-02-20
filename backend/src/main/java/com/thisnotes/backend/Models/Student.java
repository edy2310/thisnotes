package com.thisnotes.backend.Models;

import java.util.List;
import java.util.Map;

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
	//private List<Float> courseNotes;
	//private Map<String, List<Float>> courses;
		
	public Student() {}

	public Student(Integer id, String firstName, String lastName, String level, String grade, List<Float> courseNotes,
			Map<String, List<Float>> courses) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.level = level;
		this.grade = grade;
		//this.courseNotes = courseNotes;
		//this.courses = courses;
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
	/*public List<Float> getCourseNotes() {
		return courseNotes;
	}
	public void setCourseNotes(List<Float> courseNotes) {
		this.courseNotes = courseNotes;
	}
	public Map<String, List<Float>> getCourses() {
		return courses;
	}
	public void setCourses(Map<String, List<Float>> courses) {
		this.courses = courses;
	} */

}
