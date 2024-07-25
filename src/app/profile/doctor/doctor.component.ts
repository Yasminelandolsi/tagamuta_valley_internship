import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {


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
    // Logic to check APCI status
  }

  applyForApci() {
    switch (this.userRole) {
      case 'PATIENT':
        this.router.navigate(['/apply-for-apci/patient']);
        break;
      case 'DOCTOR':
        this.router.navigate(['/apply-for-apci/doctor']);
        break;
      case 'CNAM_OFFICER':
        this.router.navigate(['/apply-for-apci/cnam-officer']);
        break;
      default:
        // Handle unexpected role
        this.router.navigate(['/']);
        break;
    }
  }
}

