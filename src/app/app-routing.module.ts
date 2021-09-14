import { ElementosFerreteriaComponent } from './componentes/elementos-ferreteria/elementos-ferreteria.component';
import { NgModule, Component } from '@angular/core';
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
import { ElementosLamparasComponent } from './componentes/elementos-lamparas/elementos-lamparas.component';
import { ElementosConcreteItemsComponent } from './componentes/elementos-concrete-items/elementos-concrete-items.component';
import { ElementosMoviliarioComponent } from './componentes/elementos-moviliario/elementos-moviliario.component';
import { ElementosElectricosComponent } from './componentes/elementos-electricos/elementos-electricos.component';
import { VentaproductoComponent } from './componentes/ventaproducto/ventaproducto.component';

import { SlidebarComponent } from './componentes/slidebar/slidebar.component';

const routes: Routes = [
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'obras', component: ObrasComponent},
  { path: 'revista', component: RevistaComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: '', component: HomeComponent},
  { path: 'productos_ferreteria', component: ElementosFerreteriaComponent},
  { path: 'productos_lampara', component: ElementosLamparasComponent},
  { path: 'productos_concrete_items', component: ElementosConcreteItemsComponent},
  { path: 'productos_moviliarios', component: ElementosMoviliarioComponent},
  { path: 'productos_electricos', component: ElementosElectricosComponent},
  { path: 'venta_producto', component: VentaproductoComponent },
  { path: 'slidebar', component: SlidebarComponent}
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
