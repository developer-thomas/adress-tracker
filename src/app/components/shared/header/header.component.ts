import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/services/adress.service';
import { AdressInterface } from '../../../models/adress.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private getAdressApi: Adress) {}

  public locationData!: AdressInterface;

  ngOnInit(): void {
    this.getAdressApi.getIpAddress().subscribe((res) => {
      this.locationData = res;
    });
  }

  public submitIp(value: string) {
    this.getAdressApi.getIpAddress(value).subscribe((res) => {
      console.log(res);
      this.locationData = res;
    });
  }
}

// https://meuip.com/api/meuip.php
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", 'https://meuip.com/api/meuip.php');
// xmlhttp.send();
// xmlhttp.onload = function(e) {
//   alert("Seu IP é: "+xmlhttp.response);
// }
