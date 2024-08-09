package doctor.submit.form.microservice.demo.controller;
import doctor.submit.form.microservice.demo.model.DoctorSubmission;
import doctor.submit.form.microservice.demo.service.DoctorSubmissionService; // Import the service

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/doctor")
public class DoctorSubmissionController {

    @Autowired
    private DoctorSubmissionService service;

    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(
            @RequestParam("apciIdentifier") String apciIdentifier,
            @RequestParam("doctorName") String doctorName,
            @RequestParam("doctorSpeciality") String doctorSpeciality,
            @RequestParam("location") String location,
            @RequestParam("conventionCode") String conventionCode,
            @RequestParam("patientName") String patientName,
            @RequestParam("socialNumber") String socialNumber,
            @RequestParam("date") String date,
            @RequestParam("doctorSignature") MultipartFile doctorSignature) {

        DoctorSubmission submission = new DoctorSubmission();
        submission.setApciIdentifier(apciIdentifier);
        submission.setDoctorName(doctorName);
        submission.setDoctorSpeciality(doctorSpeciality);
        submission.setLocation(location);
        submission.setConventionCode(conventionCode);
        submission.setPatientName(patientName);
        submission.setSocialNumber(socialNumber);
        submission.setDate(date);

        try {
            service.saveSubmission(submission, doctorSignature);
            return ResponseEntity.status(HttpStatus.OK).body("Form submitted successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving file: " + e.getMessage());
        }
    }

    // Nouvelle méthode GET pour récupérer toutes les soumissions
    @GetMapping("/submissions")
    public ResponseEntity<List<DoctorSubmission>> getAllSubmissions() {
        List<DoctorSubmission> submissions = service.getAllSubmissions();
        return ResponseEntity.ok(submissions);
    }




    @GetMapping("/submission-by-patient")
    public ResponseEntity<DoctorSubmission> getSubmissionByPatientName(@RequestParam String patientName) {
        DoctorSubmission submission = service.getSubmissionByPatientName(patientName);
        if (submission != null) {
            return ResponseEntity.ok(submission);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
