import { Component, Injectable, OnInit, Output } from '@angular/core';
import { Adress } from 'src/app/services/adress.service';
import { AdressInterface } from '../../../models/adress.interface';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private getAdressApi: Adress, private mapService: MapService) {}

  public locationData!: AdressInterface;

  ngOnInit(): void {
    this.getAdressApi.getIpAddress().subscribe((res) => {
      this.locationData = res;
    });
  }

  public submitIp(value: string) {
    this.getAdressApi.getIpAddress(value).subscribe((res) => {
      this.locationData = res;
      // TRAVEI AQUI
      // O que eu preciso pra mudar a visualização do mapa quando o usuário enviar o input?
      // quero uma função que seja chamada quando clicar no botão de enviar ip
      // essa função terá dois parâmetros contendo a lat e long que for obtido por esta response
      // esses parâmetros devem ser enviados como valor para os objetos de lat e lng do header component
      this.mapService.changeView(res.location.lat, res.location.lng);
    });
  }
}

// Essa requisição ta dando erro

// https://meuip.com/api/meuip.php
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", 'https://meuip.com/api/meuip.php');
// xmlhttp.send();
// xmlhttp.onload = function(e) {
//   alert("Seu IP é: "+xmlhttp.response);
// }
