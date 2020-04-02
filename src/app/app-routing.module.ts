import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from "./componentes/login/login.component";
import { ErrorComponent } from "./componentes/error/error.component";
import { HomeComponent } from "./componentes/home/home.component";


const routes: Routes = [{path: 'bienvenida', component: BienvenidaComponent},
{path: '', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: '**', component: ErrorComponent}
]; //constante rutas del tipo rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
