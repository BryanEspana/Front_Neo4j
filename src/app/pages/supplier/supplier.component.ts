import { Component, OnInit } from '@angular/core';
import { Games } from '../Inventario/Inventario.component';
import { Stores } from 'src/app/interfaces/stores';
import { GamesService } from 'src/app/services/games/games.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  Stores: Stores[] = [];
  selectedStore: any = null;
  currentPage: number = 1;
  hasSearched: boolean = false; 
  isLoading: boolean = false;
  games: Games[] = [];

  constructor(
    private  gamesService: GamesService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.loadStores();

  }

  loadStores() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.Stores = user.storesAdmin.map((store: any) => ({
        label: `${store.id} - ${store.nombre}`,
        value: store.id 
      }));
    }
  }
  fetchGames() {
    if (this.selectedStore) {
      this.hasSearched = true; 
      this.isLoading = true;
      this.gamesService.getGamesByStoreId(this.selectedStore.value, this.currentPage).subscribe(
        data => {
          this.games = data;
          console.log("JUEGOS:Games retrieved", data);
          this.isLoading = false;
        },
        error => {
          console.error('Error al cargar los juegos:', error);
          this.isLoading = false;
        }
      );
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Seleccione una tienda',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
        }
  }

  goAddGames(){
    if (this.selectedStore && this.selectedStore.value) {
    this.route.navigate(['home/add-games', this.selectedStore.value]);
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Seleccione una tienda',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
  }


}
