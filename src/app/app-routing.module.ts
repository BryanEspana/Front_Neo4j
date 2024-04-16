import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/Login/Login.component';
import { HomeComponent } from './pages/home/Home/Home.component';
import { InicioComponent } from './pages/home/Inicio/Inicio.component';
import { DetailGameComponent } from './pages/DetailGame/DetailGame.component';
import { InventarioComponent } from './pages/Inventario/Inventario.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'detail-game', component: DetailGameComponent},
      { path: 'inventario', component: InventarioComponent},
      { path: 'supplier', component: SupplierComponent},
      { path: 'explorar', component: ExplorarComponent },
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
