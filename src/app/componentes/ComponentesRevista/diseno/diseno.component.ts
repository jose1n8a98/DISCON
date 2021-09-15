import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.css']
})
export class DisenoComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Los lugares más calientes de una habitación son las esquinas',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Lugares-mas-calientes-de-una-habitacion-938x1024.jpg',
        descripcion: 'Los lugares más calientes de una habitación son las esquinas        ¿Por qué?        Porque están a 90º'
      },
      {
        title:'Juego infantil inspirado en la Villa Savoye',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Juego-infantil-Villa-Savoye-Le-corbusier.jpg',
        descripcion: 'Hoy os traemos esta reproducción de la Villa Savoye de Le Corbusier convertida en juego infantil para un parque.'
      },
      {
        title:'Légolas ¿cómo se llamaba ese primo tuyo, el que hacía estructuras para jardín?',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Chiste-legolas-estructura-jardin-pergolas-866x1024.png',
        descripcion: 'Aragon: Oye Légolas ¿cómo se llamaba ese primo tuyo, el que hacía estructuras para jardín?        Légolas: Pérgolas        Aragorn: Ese joer… que no me acordaba'
      },
    ]
  }

}
