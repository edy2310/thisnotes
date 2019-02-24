package com.thisnotes.backend.parents;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Models.Parent;
import com.thisnotes.backend.Models.Student;
import com.thisnotes.backend.Repositories.ParentsRepository;
import com.thisnotes.backend.Repositories.StudentsRepository;

@RestController
public class ParentApi {
	
	protected Integer studentIdFound; 
	
	@Autowired
	private ParentsRepository parentsRepo;
	
	@Autowired
	private StudentsRepository studentsRepo;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registerParent")
	public boolean registerParent(HttpServletRequest req) {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		String originalKey = req.getParameter("parentKey");
		
		List<Student> studentToSearch = (List<Student>) studentsRepo.findAll();
		for(Student st : studentToSearch) {
			String originParentKey = st.getParentKey();
			if(originParentKey.equals(originalKey)) {
				this.studentIdFound = st.getId();
				createParent(email, password, originalKey);
				return true;
			}
		}
		return false;
	}
	
	private void createParent(String email, String password, String originalKey) {
		Parent parentToAdd = new Parent();
		parentToAdd.setEmail(email);
		parentToAdd.setPassword(password);
		parentToAdd.setOriginalKey(originalKey);
		parentToAdd.setStudentKey(this.studentIdFound);
		
		parentsRepo.save(parentToAdd);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/loginParent")
	public boolean loginParent(HttpServletRequest req) {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		
		List<Parent> parentToLogin = (List<Parent>) parentsRepo.findAll();
		for(Parent par : parentToLogin) {
			String parEmail = par.getEmail();
			String parPassword = par.getPassword();
			if(parEmail.equals(email) && parPassword.equals(password))
				return true;
		}
		return false;
	}

}
