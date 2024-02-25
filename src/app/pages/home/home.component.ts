import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/services/adress.service';
import * as L from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  private map:any;

  constructor(private getAdress: Adress, private http: HttpClient) {}

  public initMap(): void {
    let myIcon = L.icon({
      iconUrl: '../../../assets/marker-icon.png',
      iconSize: [20, 40],
      popupAnchor: [-3, -76],
      shadowUrl: '../../../assets/marker-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });

    this.map =  L.map('map').setView([-3.1019,-60.0250]).setZoom(16);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-3.1019,-60.0250], {icon: myIcon}).addTo(this.map);

    }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
    this.getAdress.getIpAddress().subscribe( 
      { next: res => console.log(res) }
    )
  }
}

