package doctor.submit.form.microservice.demo.repository;

import doctor.submit.form.microservice.demo.model.CnamDecision;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CnamDecisionRepository extends JpaRepository<CnamDecision, Long> {
    CnamDecision findByApciIdentifier(String apciIdentifier);
}
