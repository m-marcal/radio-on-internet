import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) {}

  public getJsonServerBaseURL(): string {
      const host = window.location.origin;
      if (host.includes('localhost')) {
        return 'http://localhost:3000/radios';
      } else if(host.includes('github')) {
        // prod
        return 'https://mmarcal.xyz:443/radios';
      }

      return 'http://localhost:3000/radios';
    }
}
