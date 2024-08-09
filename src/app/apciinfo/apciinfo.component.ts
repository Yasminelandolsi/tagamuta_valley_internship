import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { ApciIdentifierService } from 'src/app/apply-for-apci/apci-identifier.service'; // Import ApciIdentifierService
import { ApciformService } from 'src/app/apciform.service'; // Import ApciformService

// Define the Apciform model directly in the component file
export interface Apciform {
  apciIdentifier: string;
  patientUniqueIdentifier: string;
  patientConventionCode: string;
  patientCnss: boolean;
  patientCnrps: boolean;
  patientConventionBilaterale: boolean;
  patientInsuredPrenom: string;
  patientInsuredNom: string;
  patientInsuredAdresse: string;
  patientInsuredNCin: string;
  patientInsuredTelephone: string;
  patientBeneficiaryType: string;
  patientBeneficiaryPrenom: string;
  patientBeneficiaryNom: string;
  patientBeneficiaryDateNaissance: string;
  doctorName: string;
  doctorSpeciality: string;
  location: string;
  doctorConventionCode: string;
  patientName: string;
  socialNumber: string;
  date: string;
  doctorSignature: string;
}

@Component({
  selector: 'app-apciinfo',
  templateUrl: './apciinfo.component.html',
  styleUrls: ['./apciinfo.component.css']
})
export class ApciinfoComponent implements OnInit {
  apciforms: Apciform[] = [];
  apciForm: FormGroup;

  // Inject Router, FormBuilder, and services in the constructor
  constructor(
    private fb: FormBuilder,
    private apciformService: ApciformService,
    private apciIdentifierService: ApciIdentifierService, // Inject ApciIdentifierService
    private router: Router
  ) {
    // Initialize the form group
    this.apciForm = this.fb.group({
      apciIdentifier: [''],
      // other fields can be added here as needed
    });
  }

  ngOnInit(): void {
    this.loadApciforms();
  }

  loadApciforms(): void {
    this.apciformService.getAllApciforms().subscribe(
      (data: Apciform[]) => {
        this.apciforms = data;
        console.log('Apciforms loaded:', this.apciforms);
      },
      (error) => {
        console.error('Error loading apciforms', error);
      }
    );
  }

  // Adapted method to set APCI identifier and update form
  setApciIdentifier(apciform: Apciform): void {
    if (apciform.apciIdentifier) {
      this.apciIdentifierService.setApciIdentifier(apciform.apciIdentifier);
      console.log('Set APCI Identifier:', apciform.apciIdentifier);
      // Store in the service
      this.apciForm.patchValue({
        apciIdentifier: apciform.apciIdentifier
      });
    }
  }

  completeItem(): void {
    this.router.navigate(['/cnamdecision']);
  }
}
