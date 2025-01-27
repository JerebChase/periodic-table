import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { element } from '../../app/elements/models/element.model';
import { elementDetail } from '../../app/elements/models/element-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getElements(): Observable<element[]> {
    return this.http.get<element[]>(`${this.baseUrl}/elements`);
  }

  getElement(id: string): Observable<elementDetail> {
    return this.http.get<elementDetail>(`${this.baseUrl}/elements/${id}`);
  }
}
