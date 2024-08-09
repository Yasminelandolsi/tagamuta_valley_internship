package doctor.submit.form.microservice.demo.repository;

import doctor.submit.form.microservice.demo.model.Apciform;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApciformRepository extends JpaRepository<Apciform, Long> {
    // You can add custom queries here if needed
    Optional<Apciform> findById(Long id);
}
