package doctor.submit.form.microservice.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "doctorforms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "apci_identifier", nullable = false)

    private String apciIdentifier;
    private String doctorName;
    private String doctorSpeciality;
    private String location;
    private String conventionCode;
    private String patientName;
    private String socialNumber;
    private String date;
    private String doctorSignature; // This will store the path or URL of the uploaded file

    // Getters and setters

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

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getDoctorSpeciality() {
        return doctorSpeciality;
    }

    public void setDoctorSpeciality(String doctorSpeciality) {
        this.doctorSpeciality = doctorSpeciality;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getConventionCode() {
        return conventionCode;
    }

    public void setConventionCode(String conventionCode) {
        this.conventionCode = conventionCode;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getSocialNumber() {
        return socialNumber;
    }

    public void setSocialNumber(String socialNumber) {
        this.socialNumber = socialNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDoctorSignature() {
        return doctorSignature;
    }

    public void setDoctorSignature(String doctorSignature) {
        this.doctorSignature = doctorSignature;
    }
}
