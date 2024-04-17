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
import { DetailGameComponent } from './pages/InventarioFolder/DetailGame/DetailGame.component';
import { DataViewModule } from 'primeng/dataview';
import { InventarioComponent } from './pages/InventarioFolder/Inventario/Inventario.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LoadingComponent } from './pages/components/loading/loading.component';
import { SupplierComponent } from './pages/InventarioFolder/supplier/supplier.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { PickListModule } from 'primeng/picklist';
import { AddGamesToStoreComponent } from './pages/AddGamesToStore/AddGamesToStore.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CrearTiendaComponent } from './pages/InventarioFolder/CrearTienda/CrearTienda.component';
import { RatingModule } from 'primeng/rating';
import { CarritoDeComprasComponent } from './pages/carritoDeCompras/carritoDeCompras.component';
import { OrderListModule } from 'primeng/orderlist';
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
    InventarioComponent,
    LoadingComponent,
    SupplierComponent,
    ExplorarComponent,
    AddGamesToStoreComponent,
    CrearTiendaComponent,
    CarritoDeComprasComponent
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
    DataViewModule,
    SpeedDialModule,
    TooltipModule,
    DialogModule,
    HttpClientModule,
    IconFieldModule,
    InputIconModule,
    DropdownModule,
    CalendarModule,
    InputSwitchModule,
    PickListModule,
    DragDropModule,
    RatingModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
