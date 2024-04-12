import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  username: string = 'Bryan España';
  items: any[] = [];

  constructor(

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
  }

  onProfile() {
    console.log('Perfil clickeado');
  }

  onLogout() {
    console.log('Cerrar sesión clickeado');
  }
}
