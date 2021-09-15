import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Buscan construir una metrópoli en el desierto de EE.UU.',
        img:'https://cnnespanol.cnn.com/wp-content/uploads/2021/09/2F210906140349-telosa-tower-super-tease.jpg?quality=100&strip=info&w=780&h=438&crop=1',
        descripcion: 'El multimillonario Marc Lore planea construir una ciudad utópica para 5 millones de personas en el desierto de Estados Unidos, donde solo se usarán energías renovables para el transporte y la producción, y será la "ciudad más abierta, más justa y más inclusiva'
      },
      {
        title:'Descubre la mejor nueva arquitectura del mundo',
        img:'https://cnnespanol.cnn.com/wp-content/uploads/2021/07/210726152036-05-world-architecture-festival.jpg?resize=940,530',
        descripcion: 'El Festival Mundial de Arquitectura (WAF) desveló su prestigiosa lista de los mejores edificios y diseños paisajísticos de todo el mundo. Estas son algunas de las obras seleccionadas para 2021.'
      },
      {
        title:'Mira la terminal de aeropuerto abandonada en Nueva Orleans, donde todo sigue funcionando',
        img:'https://www.wiechmann.de/wp-content/uploads/2020/01/Aerial-2-Credit-Louis-Armstrong-New-Orleans-International-Airport-scaled.jpg',
        descripcion: 'Estas imágenes son de las viejas y emblemáticas instalaciones del aeropuerto internacional Louis Armstrong de Nueva Orleans. Actualmente está cerrado y virtualmente abandonado. El lugar, según el diario USA Today, fue nombrado como uno de los tres principales aeropuertos de Estados Unidos en 2020.'
      },
      {
        title:'Presentan plan para construir lo que sería el segundo rascacielos más alto del mundo',
        img:'https://conceptodefinicion.de/wp-content/uploads/2018/01/Rascacielos2.jpg',
        descripcion: 'El estudio de arquitectura Kettle Collective —con sede en Escocia— difundió este jueves su plan para construir el Lakhta Center 2, el cual sería el segundo rascacielos más alto del mundo. El Lakhta Center 2 tendrá 703 metros de altura y se ubicará en San Petersburgo, Rusia. Aunque no será el edificio más alto del mundo —el más alto es el Burj Khalifa de Dubai con 828 metros— sí tendrá el piso ocupado a mayor altura —a unos 590 metros— donde habrá una galería con vistas.'
      },
      
    ]
  }

}
