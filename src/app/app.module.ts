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
import { NavbarProductosComponent } from './componentes/navbar-productos/navbar-productos.component';
import { CardProductosComponent } from './componentes/card-productos/card-productos.component';
import { ElementosFerreteriaComponent } from './componentes/elementos-ferreteria/elementos-ferreteria.component';
import { CardsElementosComponent } from './componentes/cards-elementos/cards-elementos.component';
import { ElementosLamparasComponent } from './componentes/elementos-lamparas/elementos-lamparas.component';
import { ElementosConcreteItemsComponent } from './componentes/elementos-concrete-items/elementos-concrete-items.component';
import { CardObrasComponent } from './componentes/card-obras/card-obras.component';

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
    HomeComponent,
    NavbarProductosComponent,
    CardProductosComponent,
    ElementosFerreteriaComponent,
    CardsElementosComponent,
    ElementosLamparasComponent,
    ElementosConcreteItemsComponent,
    CardObrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
