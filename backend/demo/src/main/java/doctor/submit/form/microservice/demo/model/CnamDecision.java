package doctor.submit.form.microservice.demo.model;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
@Table(name = "cnamdecision")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class CnamDecision {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DecisionStatus decisionStatus;
    @Column(unique = true)
    private String apciIdentifier;
    private String apciCode;
    private String coverageDuration;
    private String refusalMotive;
    private String observations;
    private LocalDate coverageStartDate;
    private LocalDate signOffDate;

    // Getters and Setters

    public enum DecisionStatus {
        accepter,
        refuser
    }
}
