import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 //Inicio servicio
 import { CargarScriptsService } from './cargar-scripts.service'
 //Fin servicio

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
import { ElementosMoviliarioComponent } from './componentes/elementos-moviliario/elementos-moviliario.component';
import { ElementosElectricosComponent } from './componentes/elementos-electricos/elementos-electricos.component';
import { VentaproductoComponent } from './componentes/ventaproducto/ventaproducto.component';
import { CardObrasComponent } from './componentes/card-obras/card-obras.component';
import { CardVentaComponent } from './componentes/card-venta/card-venta.component';
import { MiniCardsComponent } from './componentes/mini-cards/mini-cards.component';
import { NavRevistasComponent } from './componentes/nav-revistas/nav-revistas.component';
import { InicioComponent } from './componentes/ComponentesRevista/inicio/inicio.component';
import { ActualidadComponent } from './componentes/ComponentesRevista/actualidad/actualidad.component';
import { ArquitecturaComponent } from './componentes/ComponentesRevista/arquitectura/arquitectura.component';
import { DisenoInteriorComponent } from './componentes/ComponentesRevista/diseno-interior/diseno-interior.component';
import { DisenoComponent } from './componentes/ComponentesRevista/diseno/diseno.component';
import { ArteCulturaComponent } from './componentes/ComponentesRevista/arte-cultura/arte-cultura.component';
import { TecnologiaComponent } from './componentes/ComponentesRevista/tecnologia/tecnologia.component';
import { FormArticComponent } from './componentes/ComponentesRevista/form-artic/form-artic.component';




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
    CardObrasComponent,
    ElementosMoviliarioComponent,
    ElementosElectricosComponent,
    VentaproductoComponent,
    CardObrasComponent,
    CardVentaComponent,
    MiniCardsComponent,
    CardObrasComponent,
    NavRevistasComponent,
    InicioComponent,
    ActualidadComponent,
    ArquitecturaComponent,
    DisenoInteriorComponent,
    DisenoComponent,
    ArteCulturaComponent,
    TecnologiaComponent,
    FormArticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
