package com.Garvit.CVSculpt_backend.Controller;

import com.Garvit.CVSculpt_backend.Service.CoverLetterService;
import com.Garvit.CVSculpt_backend.Service.ResumeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/generate")
public class ResumeController {

    private ResumeService resumeService;
    private CoverLetterService coverLetterService;

    @GetMapping("/greet")
    public String greet()
    {
        return "Hello CVSculpt";
    }

    public ResumeController(ResumeService resumeService, CoverLetterService coverLetterService){
        this.resumeService = resumeService;
        this.coverLetterService = coverLetterService;
    }

    @PostMapping("/resume")
    public ResponseEntity<Map<String, Object>> getResumeData(@RequestBody ResumeRequest resumeRequest) throws IOException {

        Map<String, Object> stringObjectMap = resumeService.generateResumeResponse(resumeRequest.userDescription());
        return new ResponseEntity<>(stringObjectMap, HttpStatus.OK);
    }

    @PostMapping("/coverLetter")
    public ResponseEntity<Map<String, Object>> getCVData(@RequestBody ResumeRequest resumeRequest) throws IOException
    {
        Map<String, Object> stringObjectMap = coverLetterService.generateCVResponse(resumeRequest.userDescription());
        return new ResponseEntity<>(stringObjectMap, HttpStatus.OK);
    }
}
