import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApciIdentifierService } from '../apci-identifier.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  apciIdentifier: string = '';
  uniqueIdentifierInput: string = '';
  conventionCode: string = '';

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

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private apciIdentifierService: ApciIdentifierService // Inject the service
  ) {}

  ngOnInit(): void {
    // Retrieve the APCI Identifier from the service
    this.apciIdentifier = this.apciIdentifierService.getApciIdentifier() || '';
  }

  submitApplication() {
    const formData = {
      apciIdentifier: this.apciIdentifier,
      uniqueIdentifier: this.uniqueIdentifierInput,
      conventionCode: this.conventionCode,
      cnss: this.cnss,
      cnrps: this.cnrps,
      conventionBilaterale: this.conventionBilaterale,
      insuredPrenom: this.insured.prenom,
      insuredNom: this.insured.nom,
      insuredAdresse: this.insured.adresse,
      insuredNCin: this.insured.nCin,
      insuredTelephone: this.insured.telephone,
      beneficiaryType: this.beneficiary.type,
      beneficiaryPrenom: this.beneficiary.prenom,
      beneficiaryNom: this.beneficiary.nom,
      beneficiaryDateNaissance: this.beneficiary.dateNaissance
    };

    this.http.post('http://localhost:8081/api/patient/submit', formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    })
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return of('Error occurred while submitting the form');
      })
    )
    .subscribe(response => {
      console.log('Response from server:', response);
      window.alert('Formulaire du patient soumis avec succès');
      this.router.navigate(['/some-other-route']);
    });
  }
}
