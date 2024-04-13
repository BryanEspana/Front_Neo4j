import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

constructor() { }


//Aqui van los metodos para traer la data 
getGames(){
  return [
    {
      id: 1,
      name: 'Super Mario Bros',
      price: 20,
      description: 'Juego de aventuras',
      image: 'https://www.nintendo.com/content/dam/noa/es_LA/games/nes/s/super-mario-bros-switch/super-mario-bros-switch-hero.jpg'
    },
    {
      id: 2,
      name: 'The Legend of Zelda',
      price: 30,
      description: 'Juego de aventuras',
      image: 'https://www.nintendo.com/content/dam/noa/es_LA/games/nes/t/the-legend-of-zelda-switch/the-legend-of-zelda-switch-hero.jpg'
    },
    {
      id: 3,
      name: 'Donkey Kong',
      price: 15,
      description: 'Juego de aventuras',
      image: 'https://www.nintendo.com/content/dam/noa/es_LA/games/nes/d/donkey-kong-switch/donkey-kong-switch-hero.jpg'
    },

  ]
}
}
