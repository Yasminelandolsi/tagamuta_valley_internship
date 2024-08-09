package doctor.submit.form.microservice.demo.controller;

import doctor.submit.form.microservice.demo.model.PatientSubmission;
import doctor.submit.form.microservice.demo.service.PatientSubmissionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/patient")
public class PatientSubmissionController {

    @Autowired
    private PatientSubmissionService service;

    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(@RequestBody PatientSubmission submission) {
        try {
            service.saveSubmission(submission);
            return ResponseEntity.status(HttpStatus.OK).body("Form submitted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving submission: " + e.getMessage());
        }
    }

    @GetMapping("/submissions")
    public ResponseEntity<List<PatientSubmission>> getAllSubmissions() {
        List<PatientSubmission> submissions = service.getAllSubmissions();
        return ResponseEntity.ok(submissions);
    }

    // Get a submission by ID
    @GetMapping("/submissions/{id}")
    public ResponseEntity<PatientSubmission> getSubmissionById(@PathVariable Long id) {
        Optional<PatientSubmission> submission = service.getSubmissionById(id);
        return submission.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Delete a submission by ID
    @DeleteMapping("/submissions/{id}")
    public ResponseEntity<String> deleteSubmissionById(@PathVariable Long id) {
        try {
            service.deleteSubmissionById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Submission deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting submission: " + e.getMessage());
        }
    }
}
