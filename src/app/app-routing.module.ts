import { NgModule } from '@angular/core';
import { HomeComponent } from './public/home/home/home.component';
import { TelevisoresComponent } from './views/televisores/televisores.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Televisores', component: TelevisoresComponent},
 { path: '',   redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
