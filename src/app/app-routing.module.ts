import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { RevistaComponent } from './componentes/revista/revista.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'obras', component: ObrasComponent},
  { path: 'revista', component: RevistaComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'home', component: HomeComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
