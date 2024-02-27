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

  public map!: any;
  public lat: number = 40.75909;
  public long: number = -73.97669;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mapService.initMap(this.lat, this.long);
  }
}
