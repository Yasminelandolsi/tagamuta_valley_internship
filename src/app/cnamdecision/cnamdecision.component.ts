import { Component, OnInit } from '@angular/core';
import { ApciIdentifierService } from 'src/app/apply-for-apci/apci-identifier.service';
import { CnamDecisionService } from '../cnam-decision.service';  // Adjusted import path

@Component({
  selector: 'app-cnamdecision',
  templateUrl: './cnamdecision.component.html',
  styleUrls: ['./cnamdecision.component.css']
})
export class CnamDecisionComponent implements OnInit {
  decisionStatus: string = '';  // Changed from cnamDecision to decisionStatus
  apciCode: string = '';
  apciIdentifier: string = '';
  coverageDuration: string = '';
  refusalMotive: string = '';
  observations: string = '';
  coverageStartDate: string = '';
  signOffDate: string = '';

  constructor(
    private apciIdentifierService: ApciIdentifierService,
    private cnamDecisionService: CnamDecisionService
  ) {}

  ngOnInit() {
    this.apciIdentifier = this.apciIdentifierService.getApciIdentifier() || '';
    console.log('Retrieved APCI Identifier:', this.apciIdentifier);
  }

  onSubmit() {
    const decisionData = {
      decisionStatus: this.decisionStatus,  // Changed from cnamDecision to decisionStatus
      apciCode: this.apciCode,
      apciIdentifier: this.apciIdentifier,
      coverageDuration: this.coverageDuration,
      refusalMotive: this.refusalMotive,
      observations: this.observations,
      coverageStartDate: this.coverageStartDate,
      signOffDate: this.signOffDate
    };

    this.cnamDecisionService.submitDecision(decisionData).subscribe(
      response => {
        console.log('Decision submitted successfully:', response);
      },
      error => {
        console.error('Error submitting decision:', error);
      }
    );
  }
}
