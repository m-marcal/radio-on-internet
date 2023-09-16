import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { Radio } from '../model/radio.model';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from './environment.service';


@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private baseUrl = '';

  constructor(private http: HttpClient, private envService: EnvironmentService) {
    this.baseUrl = envService.getJsonServerBaseURL();
  }

  getAllRadios(): Observable<Radio[]> {
    return this.http.get<Radio[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  addRadio(radio: Radio): Observable<Radio | null> {
    radio.id = null; // Prefiro deixar o json-server fazer auto-increment :) 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Radio>(this.baseUrl, radio, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  editRadio(updatedRadio: Radio): Observable<Radio | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put<Radio>(`${this.baseUrl}/${updatedRadio.id}`, updatedRadio, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  deleteRadio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  getRadioById(id: number): Observable<Radio | null> {
    const url = `${this.baseUrl}/${id}`;

    return this.http
      .get<Radio>(url)
      .pipe(
        catchError(error => {
            return of(null);
          }
        )
      );
  }
}