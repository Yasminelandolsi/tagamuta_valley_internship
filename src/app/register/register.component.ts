import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  deduceRole() {
    if (this.email.includes('patient')) {
      this.role = 'PATIENT';
    } else if (this.email.includes('cnam')) {
      this.role = 'CNAM_OFFICER';
    } else if (this.email.includes('doctor')) {
      this.role = 'DOCTOR';
    } else {
      this.role = ''; // Clear the role if no match found
    }
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:8080/api/auth/register', user, { headers })
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