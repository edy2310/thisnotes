package com.thisnotes.backend.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Announce {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String title;
	private String content;
	private String level;
	private String grade;
	
	public Announce() {}

	public Announce(Integer id, String title, String content, String level, String grade) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.level = level;
		this.grade = grade;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
	
	
}
