package doctor.submit.form.microservice.demo.service;

import doctor.submit.form.microservice.demo.model.CnamDecision;
import doctor.submit.form.microservice.demo.model.FinalDecision;
import doctor.submit.form.microservice.demo.model.PatientSubmission;
import doctor.submit.form.microservice.demo.repository.CnamDecisionRepository;
import doctor.submit.form.microservice.demo.repository.FinalDecisionRepository;
import doctor.submit.form.microservice.demo.repository.PatientSubmissionRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FinalDecisionService {

    @Autowired
    private FinalDecisionRepository finalDecisionRepository;

    @Autowired
    private PatientSubmissionRepository patientSubmissionRepository;

    @Autowired
    private CnamDecisionRepository cnamDecisionRepository;
    @PostConstruct

    public void mergeSubmissions() {
        List<PatientSubmission> patients = patientSubmissionRepository.findAll();

        for (PatientSubmission patient : patients) {
            String apciIdentifier = patient.getApciIdentifier();
            CnamDecision cnamDecision = cnamDecisionRepository.findByApciIdentifier(apciIdentifier);

            if (cnamDecision != null) {
                FinalDecision finalDecision = new FinalDecision();
                finalDecision.setApciIdentifier(apciIdentifier);
                finalDecision.setPatientUniqueIdentifier(patient.getUniqueIdentifier());
                finalDecision.setPatientConventionCode(patient.getConventionCode());
                finalDecision.setPatientCnss(patient.isCnss());
                finalDecision.setPatientCnrps(patient.isCnrps());
                finalDecision.setPatientConventionBilaterale(patient.isConventionBilaterale());
                finalDecision.setPatientInsuredPrenom(patient.getInsuredPrenom());
                finalDecision.setPatientInsuredNom(patient.getInsuredNom());
                finalDecision.setPatientInsuredAdresse(patient.getInsuredAdresse());
                finalDecision.setPatientInsuredNCin(patient.getInsuredNCin());
                finalDecision.setPatientInsuredTelephone(patient.getInsuredTelephone());
                finalDecision.setPatientBeneficiaryType(patient.getBeneficiaryType());
                finalDecision.setPatientBeneficiaryPrenom(patient.getBeneficiaryPrenom());
                finalDecision.setPatientBeneficiaryNom(patient.getBeneficiaryNom());
                finalDecision.setPatientBeneficiaryDateNaissance(patient.getBeneficiaryDateNaissance());

                finalDecision.setDecisionStatus(cnamDecision.getDecisionStatus());
                finalDecision.setApciCode(cnamDecision.getApciCode());
                finalDecision.setCoverageDuration(cnamDecision.getCoverageDuration());
                finalDecision.setRefusalMotive(cnamDecision.getRefusalMotive());
                finalDecision.setObservations(cnamDecision.getObservations());
                finalDecision.setCoverageStartDate(cnamDecision.getCoverageStartDate());
                finalDecision.setSignOffDate(cnamDecision.getSignOffDate());

                finalDecisionRepository.save(finalDecision);
            }
        }
    }

    public FinalDecision getById(Long id) {
        return finalDecisionRepository.findById(id).orElse(null);
    }

    public List<FinalDecision> getAll() {
        return finalDecisionRepository.findAll();
    }
}
