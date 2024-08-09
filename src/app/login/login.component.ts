import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  navigateTosignup() {
    this.router.navigate(['/register']);
  }

  login() {
    const loginRequest = { email: this.email, password: this.password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    this.http.post<any>('http://localhost:8080/api/v1/auth/signin', loginRequest, { headers })
      .subscribe({
        next: response => {
          console.log('User logged in successfully', response);

          // Store JWT token and user information in local storage
          if (response.token) {
            localStorage.setItem('authToken', response.token); // Store the JWT token
            localStorage.setItem('userName', response.name); // Assuming 'name' is a field in response
            localStorage.setItem('userRole', response.fonction); // Use 'fonction' as the role field

            // Redirect based on user role
            if (response.fonction === 'PATIENT') {
              this.router.navigate(['/profile/patient']);
            } else if (response.fonction === 'CNAM_OFFICER') {
              this.router.navigate(['/profile/cnam']);
            } else if (response.fonction === 'DOCTOR') {
              this.router.navigate(['/profile/doctor']);
            } else {
              console.error('Unknown user fonction', response.fonction);
            }
          } else {
            console.error('No token received in response');
          }
        },
        error: error => {
          console.error('Login failed', error);
          console.log('Error status:', error.status);
          console.log('Error message:', error.message);
          console.log('Error details:', error.error);
        },
        complete: () => {
          console.log('Login request completed');
        }
      });
  }
}
