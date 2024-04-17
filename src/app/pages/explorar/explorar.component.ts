import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Subscription } from 'rxjs';
import { Games } from '../InventarioFolder/Inventario/Inventario.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {

  games: Games[] = [];
  currentPage: number = 1;
  totalGames: number = 10; 
  pageSize: number = 20;
  isloading: boolean = false;
  private subscription: Subscription = new Subscription();
  visible: boolean = false;
  loading: boolean = false;
  //Crear Juego
  tituloGame: string = '';
  descriptionGame: string = '';
  portadaGame: string = '';
  ratingGame: number = 0;
  precioGame: number = 0;
  screenshotGame: string = '';
  storeId: number = 0;


  constructor(
    private gamesService: GamesService,
    private router: Router
   
  ) { }

  ngOnInit() {
    this.loadGames();

  }
  loadGames() {
    this.isloading = true;
    console.log('Cargando juegos', this.currentPage);
    this.subscription.unsubscribe();  // Desuscribe la suscripción anterior
    this.subscription = this.gamesService.getAllGames(this.currentPage, this.pageSize).subscribe(
      data => {
        this.games = data;
        this.isloading = false;
      },
      error => {
        console.error('Error al cargar los juegos:', error);
        this.isloading = false;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();  // Limpia cuando el componente se destruye
  }

  nextPage() {
    this.currentPage++;
    this.loadGames();
    if (this.currentPage < (this.totalGames / this.pageSize)) {
      this.currentPage++;
      this.loadGames();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadGames();
    }
  }

  canGoNext(): boolean {
    return this.currentPage < (this.totalGames / this.pageSize);
  }

  canGoPrev(): boolean {
    return this.currentPage > 1;
  }

  RegisterGame() {

    const GameData = {
      titulo: this.tituloGame,
      publicacion: '16/04/2024', 
      descripcion: this.descriptionGame,
      portada: this.portadaGame,
      rating: this.ratingGame,
      precio: this.precioGame,
      screenshots: this.screenshotGame
    };

    this.gamesService.createNewGame(GameData).subscribe(
      data => {
        console.log('Juego creado:', data);
        this.loadGames();
        this.visible = false;
        Swal.fire({
          title: 'Juego creado',
          text: 'El juego se ha creado con éxito',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      error => {
        console.error('Error al crear el juego:', error);
        this.visible = false;
        Swal.fire({
          title: 'Error',
          text: 'Error al crear el juego',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }
  showDialog() {
    this.visible = true;
  }
  viewGameDetails(gameId: number) {
    this.router.navigate(['home/detail-game', gameId]);
    console.log("View Game Details", gameId);
  }

}
