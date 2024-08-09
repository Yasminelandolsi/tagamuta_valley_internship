package doctor.submit.form.microservice.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "patientforms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PatientSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "apci_identifier", nullable = false)
    private String apciIdentifier;
    private String uniqueIdentifier;
    private String conventionCode;
    private boolean cnss;
    private boolean cnrps;
    private boolean conventionBilaterale;

    private String insuredPrenom;
    private String insuredNom;
    private String insuredAdresse;
    private String insuredNCin;
    private String insuredTelephone;

    private String beneficiaryType;
    private String beneficiaryPrenom;
    private String beneficiaryNom;
    private String beneficiaryDateNaissance;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApciIdentifier() {
        return apciIdentifier;
    }

    public void setApciIdentifier(String apciIdentifier) {
        this.apciIdentifier = apciIdentifier;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getConventionCode() {
        return conventionCode;
    }

    public void setConventionCode(String conventionCode) {
        this.conventionCode = conventionCode;
    }

    public boolean isCnss() {
        return cnss;
    }

    public void setCnss(boolean cnss) {
        this.cnss = cnss;
    }

    public boolean isCnrps() {
        return cnrps;
    }

    public void setCnrps(boolean cnrps) {
        this.cnrps = cnrps;
    }

    public boolean isConventionBilaterale() {
        return conventionBilaterale;
    }

    public void setConventionBilaterale(boolean conventionBilaterale) {
        this.conventionBilaterale = conventionBilaterale;
    }

    public String getInsuredPrenom() {
        return insuredPrenom;
    }

    public void setInsuredPrenom(String insuredPrenom) {
        this.insuredPrenom = insuredPrenom;
    }

    public String getInsuredNom() {
        return insuredNom;
    }

    public void setInsuredNom(String insuredNom) {
        this.insuredNom = insuredNom;
    }

    public String getInsuredAdresse() {
        return insuredAdresse;
    }

    public void setInsuredAdresse(String insuredAdresse) {
        this.insuredAdresse = insuredAdresse;
    }

    public String getInsuredNCin() {
        return insuredNCin;
    }

    public void setInsuredNCin(String insuredNCin) {
        this.insuredNCin = insuredNCin;
    }

    public String getInsuredTelephone() {
        return insuredTelephone;
    }

    public void setInsuredTelephone(String insuredTelephone) {
        this.insuredTelephone = insuredTelephone;
    }

    public String getBeneficiaryType() {
        return beneficiaryType;
    }

    public void setBeneficiaryType(String beneficiaryType) {
        this.beneficiaryType = beneficiaryType;
    }

    public String getBeneficiaryPrenom() {
        return beneficiaryPrenom;
    }

    public void setBeneficiaryPrenom(String beneficiaryPrenom) {
        this.beneficiaryPrenom = beneficiaryPrenom;
    }

    public String getBeneficiaryNom() {
        return beneficiaryNom;
    }

    public void setBeneficiaryNom(String beneficiaryNom) {
        this.beneficiaryNom = beneficiaryNom;
    }

    public String getBeneficiaryDateNaissance() {
        return beneficiaryDateNaissance;
    }

    public void setBeneficiaryDateNaissance(String beneficiaryDateNaissance) {
        this.beneficiaryDateNaissance = beneficiaryDateNaissance;
    }
}
