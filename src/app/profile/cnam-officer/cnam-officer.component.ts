import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cnam-officer',
  templateUrl: './cnam-officer.component.html',
  styleUrls: ['./cnam-officer.component.css']
})
export class CnamOfficerComponent {
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

 

  voirApci() {
    
      this.router.navigate(['/apciinfo']);
    
    
    }
  }



