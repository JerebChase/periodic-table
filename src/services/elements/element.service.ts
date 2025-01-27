import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getElements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/elements`);
  }

  getElement(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/elements/${id}`);
  }
}
