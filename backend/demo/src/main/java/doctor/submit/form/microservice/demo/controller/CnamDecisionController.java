package doctor.submit.form.microservice.demo.controller;

import doctor.submit.form.microservice.demo.model.CnamDecision;
import doctor.submit.form.microservice.demo.service.CnamDecisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/cnam")
public class CnamDecisionController {

    @Autowired
    private CnamDecisionService decisionService;

    @PostMapping("/submitDecision")
    public ResponseEntity<String> submitDecision(@RequestBody CnamDecision decision) {
        decisionService.saveDecision(decision);
        return ResponseEntity.ok("Decision submitted successfully!");
    }
}
