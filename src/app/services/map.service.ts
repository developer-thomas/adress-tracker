import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Adress } from './adress.service';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private getAdressApi: Adress) {}

  public map: any;

  public initMap(lat: number, long: number): void {
    let myIcon = L.icon({
      iconUrl: '../../../assets/marker-icon.png',
      iconSize: [20, 40],
      popupAnchor: [-3, -76],
      shadowUrl: '../../../assets/marker-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });

    this.map = L.map('map').setView([lat, long]).setZoom(16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([37.40556, -122.08611], { icon: myIcon }).addTo(this.map);
  }

  setViewMap() {}
}
