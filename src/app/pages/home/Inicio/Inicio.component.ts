import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  images = [
    '../../../assets/Carrousel/1.jpg',
    '../../../assets/Carrousel/2.avif',
    '../../../assets/Carrousel/3.jpg',
    '../../../assets/Carrousel/4.webp',
    '../../../assets/Carrousel/5.jpg',
  ];


  getSeverity(status: string) {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'secondary';
    }
  }

}
