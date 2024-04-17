import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games/games.service';

export interface Games{
  id: number;

}

@Component({
  selector: 'app-Inventario',
  templateUrl: './Inventario.component.html',
  styleUrls: ['./Inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  
  games = [
    {
      id: 1,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 2,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 3,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 3,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 3,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 3,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
    {
      id: 3,
      image: '../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '49.99'
    },
  ];

  constructor(
    private gameService: GamesService,
    private route: Router
  ) { }

  ngOnInit() {

  }

  getSeverity (games: Games) {

};

GoSupplierPage(){
  this.route.navigate(['home/supplier']);
}
}
