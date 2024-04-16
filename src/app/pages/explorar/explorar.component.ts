import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Games } from '../InventarioFolder/Inventario/Inventario.component';



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

  constructor(
    private gamesService: GamesService,
    
   
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

}
