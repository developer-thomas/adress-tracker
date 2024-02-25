import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Adress {

  constructor(private http: HttpClient) { }

  getIpAddress() {
    return this.http.get<any>('https://ipinfo.io');
  }
}
