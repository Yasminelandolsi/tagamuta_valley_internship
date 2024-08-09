package doctor.submit.form.microservice.demo.repository;

import doctor.submit.form.microservice.demo.model.FinalDecision;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinalDecisionRepository extends JpaRepository<FinalDecision, Long> {
    FinalDecision findByApciIdentifier(String apciIdentifier);
}
