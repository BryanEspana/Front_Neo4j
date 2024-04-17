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
  visible: boolean = false;
  //NGMODELS
  loading: boolean = false;
  NameStore: string = "";
  DirectionStore: string = "";
  HasOnline: boolean = false;
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
  GoToAddStore(){
    this.route.navigate(['home/create-store']);  
  }
  showDialog() {
    this.visible = true;
}
RegisterStore(){
  this.loading = true; // Inicia la carga
    const storeData = {
      nombre: this.NameStore,
      direccion: this.DirectionStore,
      hasOnline: this.HasOnline
    };
    
    this.gamesService.createNewStore(storeData).subscribe({
      next: (response) => {
        console.log('Tienda creada con éxito:', response);
        Swal.fire({
          title: 'Éxito',
          text: 'Tienda creada con éxito',
          icon: 'success',
          confirmButtonText: 'Ok'
        
        });
        this.closeDialog();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al crear la tienda:', error);
        Swal.fire({
          title: 'Error',
          text: 'Error al crear la tienda',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.closeDialog();
        this.loading = false;
      }
    });
}
closeDialog() {
  this.visible = false;
}
viewGameDetails(gameId: number) {
  this.route.navigate(['home/detail-game', gameId]);
  console.log("View Game Details", gameId);
}

DeleteGame(gameId: number) {
  console.log("selectedStore", this.selectedStore.value);
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esto',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.gamesService.deleteGame(this.selectedStore.value, gameId).subscribe(
        data => {
          console.log('Juego eliminado:', data);
          Swal.fire({
            title: 'Juego eliminado',
            text: 'El juego se ha eliminado con éxito',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.fetchGames();
        },
        error => {
          console.error('Error al eliminar el juego:', error);
          Swal.fire({
            title: 'Error',
            text: 'Error al eliminar el juego',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      );
    }
  });
}
}
