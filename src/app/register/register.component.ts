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

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

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
          // Optionally redirect to login after successful registration
          //this.router.navigate(['/login']); // Navigate to login route
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

  // Method to handle navigation to login
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}