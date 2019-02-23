package com.thisnotes.backend.announcements;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisnotes.backend.Models.Announce;
import com.thisnotes.backend.Repositories.AnnouncementsRepository;

@RestController
@RequestMapping("/announcements")
public class AnnouncementsApi {
	
	@Autowired
	private AnnouncementsRepository repo;

	@CrossOrigin("http://localhost:4200")
	@PostMapping("/create")
	public String createAnnounce(HttpServletRequest req) {
		String title = req.getParameter("title");
		String content =req.getParameter("content");
		String level = req.getParameter("level");
		String grade = req.getParameter("grade");
		
		Announce newAnnounce = new Announce();
		newAnnounce.setTitle(title);
		newAnnounce.setContent(content);
		newAnnounce.setLevel(level);
		newAnnounce.setGrade(grade);
		
		Announce savedAnnounce = repo.save(newAnnounce);
		if(savedAnnounce != null)
			return "true";
		else
			return "false";
		
	}
	
	@CrossOrigin("http://localhost:4200")
	@PostMapping("/getall")
	public List<Announce> getAll() {	
		return (List<Announce>) repo.findAll();
		
	}
	
	@CrossOrigin("http://localhost:4200")
	@PutMapping("/update/{id}")
	public void update(@PathVariable int id) {
		Optional<Announce> announceToUpdate = repo.findById(id);
		Announce newAnnounceToEdit = announceToUpdate.get();
	}
	
	@CrossOrigin("http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		Optional<Announce> announceToDelete = repo.findById(id);
		Announce newAnnounceToDelte = announceToDelete.get();
		repo.delete(newAnnounceToDelte);
	}
}
