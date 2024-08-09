import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Apciform model if not imported from the component
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

@Injectable({
  providedIn: 'root'
})
export class ApciformService {

  private apiUrl = 'http://localhost:8081/api/apciforms'; // Adjust the URL to your backend

  constructor(private http: HttpClient) {}

  getAllApciforms(): Observable<Apciform[]> {
    return this.http.get<Apciform[]>(this.apiUrl);
  }
}
