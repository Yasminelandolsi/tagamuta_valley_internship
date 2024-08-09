package doctor.submit.form.microservice.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "finaldecision")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinalDecision {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String apciIdentifier;

    // Patient details
    private String patientUniqueIdentifier;
    private String patientConventionCode;
    private boolean patientCnss;
    private boolean patientCnrps;
    private boolean patientConventionBilaterale;
    private String patientInsuredPrenom;
    private String patientInsuredNom;
    private String patientInsuredAdresse;
    private String patientInsuredNCin;
    private String patientInsuredTelephone;
    private String patientBeneficiaryType;
    private String patientBeneficiaryPrenom;
    private String patientBeneficiaryNom;
    private String patientBeneficiaryDateNaissance;

    // CNAM decision details
    @Enumerated(EnumType.STRING)
    private CnamDecision.DecisionStatus decisionStatus;
    private String apciCode;
    private String coverageDuration;
    private String refusalMotive;
    private String observations;
    private LocalDate coverageStartDate;
    private LocalDate signOffDate;
}
