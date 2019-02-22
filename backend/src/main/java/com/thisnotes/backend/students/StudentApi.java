package com.thisnotes.backend.students;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Random;

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
	public String createStudent(HttpServletRequest req) throws NoSuchAlgorithmException {
		String firstName = req.getParameter("first-name");
		String lastName = req.getParameter("second-name");
		String level = req.getParameter("level");
		String grade = req.getParameter("grade");
		
		Student newStudent = new Student();
		newStudent.setFirstName(firstName);
		newStudent.setLastName(lastName);
		newStudent.setLevel(level);
		newStudent.setGrade(grade);
		newStudent.setParentKey(this.getSaltString());
		
		Student savedStudent = repo.save(newStudent);
		if(savedStudent != null)
			return "true";
		else
			return "false";
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/getall")
	public List<Student> getAll(){
		return (List<Student>) repo.findAll();
	}
	
	protected String getSaltString() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 12) { 
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }
}
