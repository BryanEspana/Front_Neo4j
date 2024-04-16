import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/Login/Login.component';
import { HomeComponent } from './pages/home/Home/Home.component';
import { InicioComponent } from './pages/home/Inicio/Inicio.component';
import { DetailGameComponent } from './pages/InventarioFolder/DetailGame/DetailGame.component';
import { InventarioComponent } from './pages/InventarioFolder/Inventario/Inventario.component';
import { SupplierComponent } from './pages/InventarioFolder/supplier/supplier.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { AddGamesToStoreComponent } from './pages/AddGamesToStore/AddGamesToStore.component';
import { CrearTiendaComponent } from './pages/InventarioFolder/CrearTienda/CrearTienda.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'detail-game/:id', component: DetailGameComponent},
      { path: 'inventario', component: InventarioComponent},
      { path: 'supplier', component: SupplierComponent},
      { path: 'explorar', component: ExplorarComponent },
      { path: 'add-games/:storeId', component: AddGamesToStoreComponent},
      {path:'create-store', component: CrearTiendaComponent},
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
