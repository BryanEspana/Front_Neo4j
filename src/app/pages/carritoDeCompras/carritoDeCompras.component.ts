import { Component, OnInit } from '@angular/core';

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
  selectedTypePayment: any = null;
  constructor() { }

  ngOnInit() {
    this.loadCartGames();
  }

  loadCartGames() {
    this.cartGames = JSON.parse(localStorage.getItem('cart') ?? '') || [];
  }
}
