import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/Login/Login.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HomeComponent } from './pages/home/Home/Home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarComponent } from './pages/components/Sidebar/Sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarouselModule } from 'primeng/carousel';
import { InicioComponent } from './pages/home/Inicio/Inicio.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { CarrouselComponent } from './pages/components/carrousel/carrousel.component';
import { DetailGameComponent } from './pages/DetailGame/DetailGame.component';
import { DataViewModule } from 'primeng/dataview';
import { InventarioComponent } from './pages/Inventario/Inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    InicioComponent,
    FooterComponent,
    CarrouselComponent,
    DetailGameComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    FormsModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    MenuModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
