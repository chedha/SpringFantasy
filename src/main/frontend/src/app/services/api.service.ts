import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api'; // Update the port if your backend is on a different port

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<string> {
    return this.http.get(`${this.apiUrl}/greeting`, { responseType: 'text' });
  }
}
