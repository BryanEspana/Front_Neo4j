import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/Login/Login.component';
import { HomeComponent } from './pages/home/Home/Home.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
