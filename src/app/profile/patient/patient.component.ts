import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  userName: string = ''; // Initialize or fetch the username
  userRole: string = ''; // Initialize or fetch the user role

  constructor(private router: Router) {
    // Fetch user details from local storage
    this.userName = localStorage.getItem('userName') || 'Guest';
    this.userRole = localStorage.getItem('userRole') || '';
  }

  changePassword() {
    // Logic to change password
  }

  changeName() {
    // Logic to change name
  }

  checkApciStatus() {
    this.router.navigate(['/list']);
  }

  applyForApci() {
    this.router.navigate(['/item']);

  }
}
