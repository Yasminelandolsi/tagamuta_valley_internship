import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cnamdecision',
  templateUrl: './cnamdecision.component.html',
  styleUrls: ['./cnamdecision.component.css']
})
export class CnamDecisionComponent {
  cnamDecision: string = '';
  apciCode: string = '';
  coverageDuration: string = '';
  refusalMotive: string = '';
  observations: string = '';
  coverageStartDate: string = '';
  signOffDate: string = '';

  onSubmit() {
    // Logique pour soumettre le formulaire
    console.log('Décision CNAM:', this.cnamDecision);
    console.log('Code APCI:', this.apciCode);
    console.log('Durée de couverture:', this.coverageDuration);
    console.log('Motif de refus:', this.refusalMotive);
    console.log('Observations:', this.observations);
    console.log('Date de début de couverture:', this.coverageStartDate);
    console.log('Date de signature:', this.signOffDate);
  }
}
