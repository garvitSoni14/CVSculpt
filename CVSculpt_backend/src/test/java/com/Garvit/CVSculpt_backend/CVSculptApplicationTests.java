package com.Garvit.CVSculpt_backend;

import com.Garvit.CVSculpt_backend.Service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class CVSculptApplicationTests {

	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException {

//		resumeService.generateResumeResponse("I am Garvit Soni with 2 years of Java Full Stack development experience");
//		resumeService.generateCVResponse("My name is Garvit Soni, and I am applying for the role of Full Stack Java Developer at TCS. I hold a B.Tech in Computer Science and have 1.5 years of experience in developing robust backend systems using Java, Spring Boot, and MySQL, as well as creating interactive frontend interfaces using React.js. I’ve built scalable applications like an online food ordering platform and a student management system. I am a quick learner, passionate about clean code, and eager to contribute to impactful projects. You can reach me at garvit.soni23@gmail.com or +91-9876543210. I am based in Indore, India.");
	}

}
