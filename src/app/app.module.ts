import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './public/home/home/home.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { SidemenuComponent } from './public/master-page/sidemenu/sidemenu.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { HeaderComponent } from './public/master-page/header/header.component';
import { TelevisoresComponent } from './views/televisores/televisores.component';
import { SonidoComponent } from './views/sonido/sonido.component';
import { PortatilesComponent } from './views/portatiles/portatiles.component';
import { VideojuegosComponent } from './views/videojuegos/videojuegos.component';
import { RealidadVirtualComponent } from './views/realidad-virtual/realidad-virtual.component';
import { ContactoComponent } from './views/contacto/contacto.component';
 
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    TelevisoresComponent,
    SonidoComponent,
    PortatilesComponent,
    VideojuegosComponent,
    RealidadVirtualComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
