import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinalDecisionService {
  private apiUrl = `http://localhost:8081/api/finaldecisions`; // Adjust the endpoint if needed

  constructor(private http: HttpClient) {}

  getAllFinalDecisions(): Observable<FinalDecision[]> {
    return this.http.get<FinalDecision[]>(this.apiUrl);
  }
}

export interface FinalDecision {
  id: number;
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
  decisionStatus: string;
  apciCode: string;
  coverageDuration: string;
  refusalMotive: string;
  observations: string;
  coverageStartDate: string;
  signOffDate: string;
}
