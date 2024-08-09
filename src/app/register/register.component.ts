import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname: string = ''; // Updated to match Spring Boot entity
  lastname: string = '';  // Updated to match Spring Boot entity
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fonction: string = ''; // Updated to match Spring Boot entity

  constructor(private http: HttpClient, private router: Router) {}

  deduceFonction() {
    if (this.email.includes('patient')) {
      this.fonction = 'PATIENT';
    } else if (this.email.includes('cnam')) {
      this.fonction = 'CNAM_OFFICER';
    } else if (this.email.includes('doctor')) {
      this.fonction = 'DOCTOR';
    } else {
      this.fonction = ''; // Clear the fonction if no match found
    }
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      fonction: this.fonction
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:8080/api/v1/auth/signup', user, { headers })
      .subscribe({
        next: response => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']);
        },
        error: error => {
          console.error('Registration failed', error);
          console.log('Error status:', error.status);
          console.log('Error message:', error.message);
          console.log('Error details:', error.error);
        },
        complete: () => {
          console.log('Registration request completed');
        }
      });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
