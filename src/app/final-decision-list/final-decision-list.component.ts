import { Component, OnInit } from '@angular/core';
import { FinalDecisionService, FinalDecision } from '../final-decision.service';

@Component({
  selector: 'app-final-decision-list',
  templateUrl: './final-decision-list.component.html',
  styleUrls: ['./final-decision-list.component.css']
})
export class FinalDecisionListComponent implements OnInit {
  finalDecisions: FinalDecision[] = [];

  constructor(private finalDecisionService: FinalDecisionService) {}

  ngOnInit(): void {
    this.finalDecisionService.getAllFinalDecisions().subscribe(
      data => this.finalDecisions = data,
      error => console.error('Error fetching final decisions', error)
    );
  }
}
