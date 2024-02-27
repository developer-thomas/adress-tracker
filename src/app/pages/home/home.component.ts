import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/services/adress.service';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private http: HttpClient,
    private getAdressApi: Adress,
    private mapService: MapService
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.mapService.initMap();
  }
}
