package com.thisnotes.backend.students;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
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

		KeyGenerator keyGen = KeyGenerator.getInstance("AES");
		keyGen.init(256);
		SecretKey secretKey = keyGen.generateKey();
		String newKey = secretKey.toString();
		System.out.println(newKey + ", " + secretKey);
		
		
		
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
}
