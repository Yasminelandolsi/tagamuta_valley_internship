package doctor.submit.form.microservice.demo.repository;

import doctor.submit.form.microservice.demo.model.DoctorSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorSubmissionRepository extends JpaRepository<DoctorSubmission, Long> {

    DoctorSubmission findByPatientName(String patientName);

    DoctorSubmission findByApciIdentifier(String apciIdentifier);

    // Add the new method here
}
