package doctor.submit.form.microservice.demo.service;

import doctor.submit.form.microservice.demo.model.DoctorSubmission;
import doctor.submit.form.microservice.demo.repository.DoctorSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@Service
public class DoctorSubmissionService {

    @Autowired
    private DoctorSubmissionRepository repository;

    private final String uploadDir = "uploads/";

    public DoctorSubmission saveSubmission(DoctorSubmission submission, MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
            // Ensure directory exists
            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            String filePath = saveFile(file);
            submission.setDoctorSignature(filePath);
        }
        return repository.save(submission);
    }
    // Méthode pour récupérer toutes les soumissions
    public List<DoctorSubmission> getAllSubmissions() {
        return repository.findAll();
    }

    private String saveFile(MultipartFile file) throws IOException {
        // Sanitize file name
        String fileName = file.getOriginalFilename().replaceAll("[^a-zA-Z0-9.]", "_");
        Path path = Paths.get(uploadDir + fileName);
        Files.write(path, file.getBytes());
        return path.toString();
    }
    public DoctorSubmission getSubmissionByPatientName(String patientName) {
        return repository.findByPatientName(patientName);
    }



}
