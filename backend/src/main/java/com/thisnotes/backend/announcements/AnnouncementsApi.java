package com.thisnotes.backend.announcements;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
}
