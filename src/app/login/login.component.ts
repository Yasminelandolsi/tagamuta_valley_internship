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

  login() {
    const loginRequest = { id: this.id, role: this.role };
    this.http.post<any>('http://localhost:8080/api/auth/login', loginRequest)
      .subscribe(response => {
        console.log('User logged in successfully', response);
        // Store user info in local storage/session storage
        localStorage.setItem('userName', response.name); // Replace with actual field
        localStorage.setItem('userRole', response.role); // Replace with actual field
        this.router.navigate(['/profile']);
      }, error => {
        console.error('Login failed', error);
      });
  }
}
