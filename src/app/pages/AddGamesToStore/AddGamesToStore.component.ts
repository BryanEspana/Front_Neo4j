import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from 'src/app/services/games/games.service';
import { Games } from '../Inventario/Inventario.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-AddGamesToStore',
  templateUrl: './AddGamesToStore.component.html',
  styleUrls: ['./AddGamesToStore.component.scss']
})
export class AddGamesToStoreComponent implements OnInit {
  games: Games[] = [];
  currentPage: number = 1;
  totalGames: number = 10; 
  pageSize: number = 20;
  isloading: boolean = false;
  sourceGames?:  any[];
  targetGames?: any[];
  storeId: number = 0;

  private subscription: Subscription = new Subscription();
  quantities: { [key: number]: number } = {};

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.storeId = +params['storeId'];  // El '+' convierte el parámetro de cadena a número
    });
    this.sourceGames = [];
    this.targetGames = [];
    this.loadGames();
    this.sourceGames.forEach(game => this.quantities[game.id] = 1);
  }
  
  loadGames() {
    this.isloading = true;
    console.log('Cargando juegos', this.currentPage);
    this.subscription.unsubscribe();  // Desuscribe la suscripción anterior
    this.subscription = this.gamesService.getAllGames(this.currentPage, this.pageSize).subscribe(
      data => {
        this.games = data;
        this.sourceGames = this.games;
        console.log("sourceGmases", this.sourceGames);
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

  agregarJuegos() {
    const payload = this.targetGames?.map(game => ({
      gameID: game.id,
      stock_amount: this.quantities[game.id]
    })) || [];

    this.gamesService.addGamesByStoreId(this.storeId, payload).subscribe({
      next: (response) =>{
        console.log('Juegos agregados:', response);
        Swal.fire({
          title: 'Juegos agregados',
          text: 'Los juegos se han agregado correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['home/supplier']);
      },
      error: (error) => console.error('Error al agregar juegos:', error)
    });
  }

}
