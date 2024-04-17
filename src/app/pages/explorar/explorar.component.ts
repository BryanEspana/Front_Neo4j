import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Subscription } from 'rxjs';
import { Games } from '../InventarioFolder/Inventario/Inventario.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Stores } from 'src/app/interfaces/stores';



@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {
  rolDefault: string | null = null;
  Stores: Stores[] = [];
  selectedStore: any = null;
  games: Games[] = [];
  currentPage: number = 1;
  totalGames: number = 10; 
  pageSize: number = 20;
  isloading: boolean = false;
  private subscription: Subscription = new Subscription();
  visible: boolean = false;
  loading: boolean = false;
  hasSearched: boolean = false; 
  isLoading: boolean = false;
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
    private router: Router,
    private authService: AuthService
   
  ) { }

  ngOnInit() {
    this.loadStores();
    //this.loadGames();
    const user = this.authService.getUser();
    this.rolDefault = user? user.type : 'No user';

  }
/*
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
*/
  ngOnDestroy() {
    this.subscription.unsubscribe();  // Limpia cuando el componente se destruye
  }

  nextPage() {
    this.currentPage++;
    //this.loadGames();
    if (this.currentPage < (this.totalGames / this.pageSize)) {
      this.currentPage++;
      //this.loadGames();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      //this.loadGames();
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
        //this.loadGames();
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
  addToCart(gameId: number) {
    const gameToAdd = this.games.find(game => game.id === gameId);
    if (!gameToAdd) {
      console.error('Juego no encontrado');
      return;
    }
  
    // Intenta obtener el carrito del localStorage y verifica si existe y es válido antes de parsearlo
    const cartData = localStorage.getItem('cart');
    let cart = [];
    if (cartData) {
      try {
        cart = JSON.parse(cartData);
      } catch (error) {
        console.error('Error al parsear datos del carrito:', error);
        // Opcional: Puedes decidir vaciar el carrito si los datos son corruptos
        localStorage.setItem('cart', JSON.stringify([]));
        return; // Detiene la ejecución si hay un error al parsear
      }
    }
  
    // Añade el juego al carrito y actualiza el localStorage
    cart.push(gameToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Notifica al usuario que el juego ha sido añadido al carrito
    Swal.fire({
      title: 'Juego añadido al carrito',
      text: 'El juego se ha añadido al carrito con éxito',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
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
  
  loadStores() {
    this.gamesService.getAllStores(1, 5).subscribe({
      next: (data) => {
        this.Stores = data.map((store: any) => ({
          label: `${store.id} - ${store.nombre}`, // Combinar ID y nombre
          value: store.id        
        }));  
        console.log("Tiendas cargadas:", this.Stores); // Asegúrate de loguear this.Stores y no data para ver la transformación
      },
      error: (error) => {
        console.error('Error al cargar las tiendas:', error);
      }
    }); 
  }
  
}
