package com.thisnotes.backend.students;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Models.Student;
import com.thisnotes.backend.Repositories.StudentsRepository;

@RestController
@RequestMapping("/student")
public class StudentApi {
	
	@Autowired
	private StudentsRepository repo;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/create")
	public String createStudent(HttpServletRequest req) {
		String firstName = req.getParameter("first-name");
		String lastName = req.getParameter("second-name");
		String level = req.getParameter("level");
		String grade = req.getParameter("grade");
		
		Student newStudent = new Student();
		newStudent.setFirstName(firstName);
		newStudent.setLastName(lastName);
		newStudent.setLevel(level);
		newStudent.setGrade(grade);
		
		Student savedStudent = repo.save(newStudent);
		if(savedStudent != null)
			return "true";
		else
			return "false";
	}
}
