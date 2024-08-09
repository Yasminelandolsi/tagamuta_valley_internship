package doctor.submit.form.microservice.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "apciforms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Apciform {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String apciIdentifier;

    // Patient fields
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

    // Doctor fields
    private String doctorName;
    private String doctorSpeciality;
    private String location;
    private String doctorConventionCode;
    private String patientName;
    private String socialNumber;
    private String date;
    private String doctorSignature; // This will store the path or URL of the uploaded file
}
