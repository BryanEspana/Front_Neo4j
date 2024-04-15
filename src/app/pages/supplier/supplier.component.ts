import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  Stores: any[] = [
    {
      id: '1',
      name: 'Tienda 1',
      address: 'Calle 1 # 1-1',
      phone: '1234567890',
     
    }
  ];

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

  selectedStore: string = '';
  constructor() { }

  ngOnInit() {
  }

}
