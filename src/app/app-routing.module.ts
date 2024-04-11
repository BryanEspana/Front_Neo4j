import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/Login/Login.component';
import { HomeComponent } from './pages/home/Home/Home.component';
import { InicioComponent } from './pages/home/Inicio/Inicio.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'Inicio', component: InicioComponent },
      { path: '', redirectTo: 'Inicio', pathMatch: 'full' } // Redirecciona a dashboard por defecto
    ]
  },  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
