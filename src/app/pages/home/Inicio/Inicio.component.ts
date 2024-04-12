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
  cards = [
    {
        image: '../../../../assets/horizon.jpeg',
        title: 'Horizon Forbidden West',
        enterprise: 'Guerilla Games',
        price: '$49,99'
    },
    {
      image: '../../../../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '$49,99'
  },
     {
        image: '../../../../assets/horizon.jpeg',
        title: 'Horizon Forbidden West',
        enterprise: 'Guerilla Games',
        price: '$49,99'
    },
    {
      image: '../../../../assets/horizon.jpeg',
      title: 'Horizon Forbidden West',
      enterprise: 'Guerilla Games',
      price: '$49,99'
  },
  {
    image: '../../../../assets/horizon.jpeg',
    title: 'Horizon Forbidden West',
    enterprise: 'Guerilla Games',
    price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
 {
    image: '../../../../assets/horizon.jpeg',
    title: 'Horizon Forbidden West',
    enterprise: 'Guerilla Games',
    price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
{
  image: '../../../../assets/horizon.jpeg',
  title: 'Horizon Forbidden West',
  enterprise: 'Guerilla Games',
  price: '$49,99'
},
{
image: '../../../../assets/horizon.jpeg',
title: 'Horizon Forbidden West',
enterprise: 'Guerilla Games',
price: '$49,99'
},
    // Añade más objetos para cada tarjeta
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
