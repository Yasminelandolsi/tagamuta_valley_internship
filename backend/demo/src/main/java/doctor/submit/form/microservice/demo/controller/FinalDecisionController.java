package doctor.submit.form.microservice.demo.controller;

import doctor.submit.form.microservice.demo.model.FinalDecision;
import doctor.submit.form.microservice.demo.service.FinalDecisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/finaldecisions")
public class FinalDecisionController {

    @Autowired
    private FinalDecisionService finalDecisionService;

    @PostMapping("/merge")
    public void mergeSubmissions() {
        finalDecisionService.mergeSubmissions();
    }

    @GetMapping("/{id}")
    public FinalDecision getById(@PathVariable Long id) {
        return finalDecisionService.getById(id);
    }

    @GetMapping
    public List<FinalDecision> getAll() {
        return finalDecisionService.getAll();
    }
}
