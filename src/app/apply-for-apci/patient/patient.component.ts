import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  cnss: boolean = false;
  cnrps: boolean = false;
  conventionBilaterale: boolean = false;

  insured = {
    prenom: '',
    nom: '',
    adresse: '',
    nCin: '',
    telephone: ''
  };

  beneficiary = {
    type: '',
    prenom: '',
    nom: '',
    dateNaissance: ''
  };

  uniqueIdentifier: string = '';

  submitApplication() {
    // Handle form submission
    console.log('Form submitted', {
      insured: this.insured,
      beneficiary: this.beneficiary,
      uniqueIdentifier: this.uniqueIdentifier,
      cnss: this.cnss,
      cnrps: this.cnrps,
      conventionBilaterale: this.conventionBilaterale
    });
  }
}
