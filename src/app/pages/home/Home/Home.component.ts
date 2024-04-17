import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  cartItemCount: number = 0; 
  constructor(
    private GameService: GamesService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.updateCartCount();

  }
  updateCartCount() {
    this.cartItemCount = 10;
  }
  GoShopCart() {
    this.route.navigate(['home/carrito']);
  }
  
}
