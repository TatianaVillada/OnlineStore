import { NgModule } from '@angular/core';
import { HomeComponent } from './public/home/home/home.component';
import { TelevisoresComponent } from './views/televisores/televisores.component';
import { PortatilesComponent } from './views/portatiles/portatiles.component';
import { SonidoComponent } from './views/sonido/sonido.component';
import { VideojuegosComponent } from './views/videojuegos/videojuegos.component';
import { RealidadVirtualComponent } from './views/realidad-virtual/realidad-virtual.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Televisores', component: TelevisoresComponent},
  { path: 'Sonido', component: SonidoComponent},
  { path: 'Portatiles', component: PortatilesComponent},
  { path: 'Videojuegos', component: VideojuegosComponent},
  { path: 'RealidadVirtual', component: RealidadVirtualComponent},
 { path: '',   redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
