package doctor.submit.form.microservice.demo.service;

import doctor.submit.form.microservice.demo.model.PatientSubmission;
import doctor.submit.form.microservice.demo.repository.PatientSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientSubmissionService {

    @Autowired
    private PatientSubmissionRepository repository;

    public PatientSubmission saveSubmission(PatientSubmission submission) {
        return repository.save(submission);
    }

    public List<PatientSubmission> getAllSubmissions() {
        return repository.findAll();
    }

    // Get a submission by ID
    public Optional<PatientSubmission> getSubmissionById(Long id) {
        return repository.findById(id);
    }

    // Delete a submission by ID
    public void deleteSubmissionById(Long id) {
        repository.deleteById(id);
    }
}
