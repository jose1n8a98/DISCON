import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquitectura',
  templateUrl: './arquitectura.component.html',
  styleUrls: ['./arquitectura.component.css']
})
export class ArquitecturaComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Apple Tower Theatre abre sus puertas en el centro de Los Ángeles',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/APPLE1-1-1024x576.jpg',
        descripcion: 'Apple ha mostrado un adelanto de su nueva tienda en el histórico Tower Theatre en el centro de Los Ángeles. Apple Tower Theatre es uno de los proyectos de restauración más importantes de Apple hasta la fecha, y su objetivo es promover aún más la creatividad en el corazón de la ciudad.'
      },
      {
        title:'Cuando la función se transforma en momento',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Funcion-playa-brasil-1024x1024.jpg',
        descripcion: 'El modernismo se dio cuenta que se podía estar afuera pero adentro. No inventó el exterior, porque siempre estuvo allí, pero sí una manera de relacionarse, de calificarlo, de tenerlo en cuenta. Al involucrarlo a la experiencia arquitectónica se metió en los límites que lo separaban de la vivienda y complejizó esa línea que los divide, cuestionando su literalidad, su realismo y respondiendo mediante la abstracción. '
      },
      {
        title:'La Evolución de la Arquitectura: “Media Architecture”',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/ad-tb-1024x585.jpg',
        descripcion: 'El concepto de ‘Media Architecture’ definido por Martijn de Waal, coorganizador de The Media Architecture Biennale, que propone  su bienal como una investigación sobre cómo los arquitectos y urbanistas pueden aprender de los ingenieros y diseñadores de medios digitales, es definido como una combinación de disciplinas entre las que se encuentran la arquitectura el urbanismo, los medios digitales, el arte y el diseño.'
      },
      {
        title:'Bolsa de Comercio de París, el nuevo templo del arte por Tadao Ando',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/PARIS1-1024x682.jpeg',
        descripcion: 'Después de más de tres años, la rediseñada Bolsa de Comercio abre sus puertas en París, financiada por el multimillonario François Pinault, la transformación del histórico edificio francés, convertido ahora en un museo de arte, que estuvo a cargo del arquitecto Tadao Ando.'
      },
  
    ]
  }

}
