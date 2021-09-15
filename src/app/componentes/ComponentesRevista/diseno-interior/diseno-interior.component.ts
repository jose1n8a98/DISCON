import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseno-interior',
  templateUrl: './diseno-interior.component.html',
  styleUrls: ['./diseno-interior.component.css']
})
export class DisenoInteriorComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Casa Masi de Bolero Estudio',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/bolero2-1024x683.jpg',
        descripcion: 'La Casa Masi, es diseño de Bolero Estudio, en Santa Cruz de Tenerife, es un ático de 160m2, siendo un espacio, donde la fusión entre la profundidad de la madera, con el cemento y el mármol, es la protagonista.'
      },
      {
        title:'De una iglesia en ruinas a una vivienda única',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/iglesia2.jpg',
        descripcion: 'El estudio bilbaíno Garmendia & Cordero ha reformado el templo abandonado de Sopuerta, en Bizkaia. Un proyecto en el que se han esforzado en mantener los restos tal y como los encontraron para que, una vez terminada la obra, el edificio pudiese seguir contando su historia.'
      },
      {
        title:'Vivienda neoyorquina en el Born de Manuel Torres Design',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/manuel2.jpg',
        descripcion: 'El estudio de diseño e interiorismo Manuel Torres Design, ha diseñado y reformado el nuevo apartamento, que se encuentra en el famoso barrio del Born, en el centro histórico de Barcelona; al lado de la calle Argentería.'
      },
      {
        title:'EDO shoes shop por CREAM estudio',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/EDO-shoes-shop-CREAM-estudio-6.jpg',
        descripcion: 'EDO se encuentra en el municipio de Sitges, un pueblo costero cercano a Barcelona, vinculado a la moda, el turismo y al ocio pero sobretodo es un lugar característico muy mediterráneo. EDO se situa en el centro histórico, en el corazón, en una de las calles de mayor afluencia, la calle Jesús núm. 12. El edificio es una construcción tradicional entre medianeras, de geometría alargada.'
      },      
    ]
  }

}
