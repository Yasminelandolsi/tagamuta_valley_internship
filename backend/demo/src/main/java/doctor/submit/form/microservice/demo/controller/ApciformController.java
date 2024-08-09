package doctor.submit.form.microservice.demo.controller;

import doctor.submit.form.microservice.demo.model.Apciform;
import doctor.submit.form.microservice.demo.service.ApciformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/apciforms")
public class ApciformController {

    @Autowired
    private ApciformService apciformService;

    @PostMapping("/merge")
    public String mergeSubmissions() {
        apciformService.mergeSubmissions();
        return "Merge process initiated";
    }

    @GetMapping("/{id}")
    public Optional<Apciform> getById(@PathVariable Long id) {
        return apciformService.getById(id);
    }

    @GetMapping
    public List<Apciform> getAll() {
        return apciformService.getAll();
    }
}
