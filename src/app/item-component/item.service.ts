import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8081/api/doctor/submissions'; // URL for the GET endpoint

  constructor(private http: HttpClient) {}

  // Method to get all submissions
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
