import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  apciIdentifier: string = this.generateUniqueIdentifier();
  uniqueIdentifierInput: string = '';
  conventionCode: string = '';         // Code conventionnel

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

  constructor(private router: Router) {}

  generateUniqueIdentifier(): string {
    return 'APCI-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  submitApplication() {
    // Save the identifier and patient form data to the backend
    console.log('Form submitted', {
      insured: this.insured,
      beneficiary: this.beneficiary,
      uniqueIdentifier: this.uniqueIdentifierInput,
      conventionCode: this.conventionCode,
      cnss: this.cnss,
      cnrps: this.cnrps,
      conventionBilaterale: this.conventionBilaterale
    });
    // Redirect to the doctor's form with the identifier in the URL
    this.router.navigate(['/doctor-form'], { queryParams: { id: this.apciIdentifier } });
  }
}
