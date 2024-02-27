import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdressInterface } from '../models/adress.interface';
@Injectable({
  providedIn: 'root',
})
export class Adress {
  public url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=at_FTqw7lt7ObfJQ5KwCf5K8fR4LkwBw&ipAddress=8.8.8.8`;

  public allDataFromIpSubject: BehaviorSubject<AdressInterface> =
    new BehaviorSubject<AdressInterface>({
      ip: 0,
      location: {
        city: '',
        country: '',
        lat: 0,
        lng: 0,
        postalCode: 0,
        region: '',
        timezone: 0,
      },
      isp: '',
    });

  public allDataFromIp$: Observable<AdressInterface> =
    this.allDataFromIpSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getIpAddress(
    userIp: string = '66.249.82.96'
  ): Observable<AdressInterface> {
    let url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=at_FTqw7lt7ObfJQ5KwCf5K8fR4LkwBw&ipAddress=${userIp}`;
    this.http.get<AdressInterface>(url).subscribe((res) => {
      this.allDataFromIpSubject.next(res);
    });
    return this.allDataFromIp$;
  }
}
