import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
