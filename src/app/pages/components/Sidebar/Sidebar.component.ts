import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  username: string | null = null;
  InitialUsername: string | null = null;
  rolDefault: string | null = null;
  items: any[] = [];

  constructor(
    private route: Router,
    private authService: AuthService

  ) {
    this.items = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user', // Asegúrate de que los nombres de los iconos sean correctos
        command: () => this.onProfile()
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-power-off', // Asegúrate de que los nombres de los iconos sean correctos
        command: () => this.onLogout()
      }
    ];

  }

  ngOnInit() {
    const user = this.authService.getUser();
    this.username = user ? user.username : 'No user';
    this.InitialUsername = this.username ? this.username.charAt(0).toUpperCase() : 'N';
    this.rolDefault = user? user.type : 'No user';
    
  }

  onProfile() {
    console.log('Perfil clickeado');
  }

  onLogout() {
    console.log('Cerrar sesión clickeado');
    this.authService.logout();
    this.route.navigate(['']);

  }
  GoInicio(){
    this.route.navigate(['home']);
  }   
  GoInventario(){
    this.route.navigate(['home/inventario']);
  }
  GoCatalogo(){
    this.route.navigate(['home/catalogo']);
  }

}
