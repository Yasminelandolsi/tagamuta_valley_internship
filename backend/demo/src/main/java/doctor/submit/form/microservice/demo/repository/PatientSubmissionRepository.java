package doctor.submit.form.microservice.demo.repository;

import doctor.submit.form.microservice.demo.model.PatientSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientSubmissionRepository extends JpaRepository<PatientSubmission, Long> {
    PatientSubmission findByApciIdentifier(String apciIdentifier);

    // Add the new method here
}
