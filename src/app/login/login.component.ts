import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id: number = 0;
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}
navigateTosignup(){
  this.router.navigate(['/register']);}
  login() {
    const loginRequest = { id: this.id, role: this.role };
    this.http.post<any>('http://localhost:8080/api/auth/login', loginRequest)
      .subscribe(response => {
        console.log('User logged in successfully', response);
        localStorage.setItem('userName', response.name); // Replace with actual field
        localStorage.setItem('userRole', response.role); // Replace with actual field

        // Redirect based on user role
        if (response.role === 'PATIENT') {
          this.router.navigate(['/profile/patient']);
        } else if (response.role === 'CNAM_OFFICER') {
          this.router.navigate(['profile/cnam']);
        } else if (response.role === 'DOCTOR') {
          this.router.navigate(['/profile/doctor']);
        } else {
          console.error('Unknown user role', response.role);
        }
      }, error => {
        console.error('Login failed', error);
      });
  }
}
