import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { RevistaComponent } from './componentes/revista/revista.component';
import { AppRoutingModule } from './app-routing.module';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home.component';

//const routes: Routes = [
  //{ path: 'quienes-somos', component: QuienesSomosComponent},
  //{ path: 'obras', component: ObrasComponent},
  //{ path: 'revista', component: RevistaComponent},
//];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuienesSomosComponent,
    ObrasComponent,
    RevistaComponent,
    CursosComponent,
    ProductosComponent,
    ContactosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
