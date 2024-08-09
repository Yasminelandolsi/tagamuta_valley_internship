package doctor.submit.form.microservice.demo.service;

import doctor.submit.form.microservice.demo.model.Apciform;
import doctor.submit.form.microservice.demo.model.DoctorSubmission;
import doctor.submit.form.microservice.demo.model.PatientSubmission;
import doctor.submit.form.microservice.demo.repository.ApciformRepository;
import doctor.submit.form.microservice.demo.repository.DoctorSubmissionRepository;
import doctor.submit.form.microservice.demo.repository.PatientSubmissionRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ApciformService {

    @Autowired
    private ApciformRepository apciformRepository;

    @Autowired
    private PatientSubmissionRepository patientSubmissionRepository;

    @Autowired
    private DoctorSubmissionRepository doctorSubmissionRepository;
    @PostConstruct

    public void mergeSubmissions() {
        List<PatientSubmission> patients = patientSubmissionRepository.findAll();
        System.out.println("Patient submissions count: " + patients.size());


        for (PatientSubmission patient : patients) {
            String apciIdentifier = patient.getApciIdentifier();
            DoctorSubmission doctor = doctorSubmissionRepository.findByApciIdentifier(apciIdentifier);
            System.out.println("For APCI Identifier: " + apciIdentifier + ", Doctor Submission: " + doctor);

            if (doctor != null) {
                Apciform apciform = new Apciform();
                apciform.setApciIdentifier(apciIdentifier);
                apciform.setPatientUniqueIdentifier(patient.getUniqueIdentifier());
                apciform.setPatientConventionCode(patient.getConventionCode());
                apciform.setPatientCnss(patient.isCnss());
                apciform.setPatientCnrps(patient.isCnrps());
                apciform.setPatientConventionBilaterale(patient.isConventionBilaterale());
                apciform.setPatientInsuredPrenom(patient.getInsuredPrenom());
                apciform.setPatientInsuredNom(patient.getInsuredNom());
                apciform.setPatientInsuredAdresse(patient.getInsuredAdresse());
                apciform.setPatientInsuredNCin(patient.getInsuredNCin());
                apciform.setPatientInsuredTelephone(patient.getInsuredTelephone());
                apciform.setPatientBeneficiaryType(patient.getBeneficiaryType());
                apciform.setPatientBeneficiaryPrenom(patient.getBeneficiaryPrenom());
                apciform.setPatientBeneficiaryNom(patient.getBeneficiaryNom());
                apciform.setPatientBeneficiaryDateNaissance(patient.getBeneficiaryDateNaissance());
                apciform.setDoctorName(doctor.getDoctorName());
                apciform.setDoctorSpeciality(doctor.getDoctorSpeciality());
                apciform.setLocation(doctor.getLocation());
                apciform.setDoctorConventionCode(doctor.getConventionCode());
                apciform.setPatientName(doctor.getPatientName());
                apciform.setSocialNumber(doctor.getSocialNumber());
                apciform.setDate(doctor.getDate());
                apciform.setDoctorSignature(doctor.getDoctorSignature());
                System.out.println("Saving Apciform: " + apciform);

                apciformRepository.save(apciform);
            }
        }
    }

    public Optional<Apciform> getById(Long id) {
        return apciformRepository.findById(id);
    }

    public List<Apciform> getAll() {
        return apciformRepository.findAll();
    }
}
