package doctor.submit.form.microservice.demo.service;

import doctor.submit.form.microservice.demo.model.CnamDecision;
import doctor.submit.form.microservice.demo.repository.CnamDecisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CnamDecisionService {

    @Autowired
    private CnamDecisionRepository repository;

    public CnamDecision saveDecision(CnamDecision decision) {
        return repository.save(decision);
    }
}
