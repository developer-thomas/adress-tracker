import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Adress } from './adress.service';

let myIcon = L.icon({
  iconUrl: '../../../assets/marker-icon.png',
  iconSize: [20, 40],
  popupAnchor: [-3, -76],
  shadowUrl: '../../../assets/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private getAdressApi: Adress) {}

  public map: any;

  lat: number = 37.40556;
  long: number = -122.08611;

  public initMap(): void {
    this.map = L.map('map').setView([this.lat, this.long]).setZoom(16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // L.marker([lat, long], { icon: myIcon }).addTo(this.map);
    L.marker([this.lat, this.long], { icon: myIcon }).addTo(this.map);
  }

  public changeView(lat: number, long: number) {
    this.map.panTo(new L.LatLng(lat, long));
    L.marker([lat, long], { icon: myIcon }).addTo(this.map);
  }
}
