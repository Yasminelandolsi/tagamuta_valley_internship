import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CnamDecisionService {
  private apiUrl = 'http://localhost:8081/api/cnam/submitDecision';

  constructor(private http: HttpClient) {}

  submitDecision(decisionData: any): Observable<string> {
    return this.http.post(this.apiUrl, decisionData, { responseType: 'text' });
  }}
