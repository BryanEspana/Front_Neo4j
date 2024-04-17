import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamesService } from 'src/app/services/games/games.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carritoDeCompras',
  templateUrl: './carritoDeCompras.component.html',
  styleUrls: ['./carritoDeCompras.component.scss']
})
export class CarritoDeComprasComponent implements OnInit {
  cartGames: any[] = [];
  TiposDePago: any[] = [
    { id: 1, label: 'Tarjeta de Crédito' },  // Usar 'label' en lugar de 'name' para ser consistente con la propiedad optionLabel
    { id: 2, label: 'Tarjeta de Débito' }
  ];
  username: string | null = null;

  selectedTypePayment: any = null;
  constructor(
    private authService: AuthService,
    private gameService: GamesService

  ) { 
    
  }

  ngOnInit() {
    const user = this.authService.getUser();
    this.username = user ? user.username : 'No user';

    this.loadCartGames();
  }

  loadCartGames() {
    this.cartGames = JSON.parse(localStorage.getItem('cart') ?? '') || [];
  }

  completePurchase() {
    const orderDetails = {
      storeID: 16144,
      date: new Date().toISOString(),
      type: "ONLINE",
      paymentType: "CREDIT",
      games: this.cartGames.map(game => ({
        gameID: game.id,
        boughtAmount: game.quantity
      }))
    };

    this.gameService.createOrder(this.username ?? '', orderDetails).subscribe({
      next: (response) => {
        console.log('Compra realizada con éxito', response);
        localStorage.removeItem('cart');
        Swal.fire({
          title: 'Compra realizada con éxito',
          text: 'Gracias por tu compra',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }
}
