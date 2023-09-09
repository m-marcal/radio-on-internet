import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Radio } from '../model/radio.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private baseUrl = 'http://localhost:3000/radios';

  constructor() {}

  getAllRadios(): Observable<Radio[]> {
    return from(
      fetch(this.baseUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
    ).pipe(
      catchError(error => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }



  addRadio(radio: Radio): Observable<Radio | null> {
    radio.id = null; // Prefiro deixar o json-server fazer auto-increment :) 

    return from(
      fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(radio)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
    ).pipe(
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      })
    );
  }

  editRadio(updatedRadio: Radio): Observable<Radio | null> {
    return from(
      fetch(`${this.baseUrl}/${updatedRadio.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRadio)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
    ).pipe(
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      })
    );
  }

  deleteRadio(id: number): Observable<void> {
    return from(
      fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        })
    ).pipe(
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      }),
      map(() => {})
    );
  }
}
