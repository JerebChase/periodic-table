import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { element } from '../../app/elements/models/element.model';
import { elementDetail } from '../../app/elements/models/element-detail.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  getElements(): Observable<element[]> {
    return this.http.get<element[]>(`${this.baseUrl}/elements`)
      .pipe(catchError(() => {
        this.router.navigate(['/error']);
        return of([]);
      }));
  }

  getElement(id: string): Observable<elementDetail> {
    return this.http.get<elementDetail>(`${this.baseUrl}/elements/${id}`)
      .pipe(catchError(() => {
        this.router.navigate(['/error']);
        return of();
      }));
  }
}
