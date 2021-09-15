import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arte-cultura',
  templateUrl: './arte-cultura.component.html',
  styleUrls: ['./arte-cultura.component.css']
})
export class ArteCulturaComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Documental The Falling Water House en Youtube',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/casa-de-la-cascada-itunes-01.jpg',
        descripcion: 'Hace tiempo hablamos del documental sobre Frank Lloyd Wright «Man Who Built America«que me recomendó Deco, podcaster de Un Minuto en Nueva York, y en esta ocasión me ha recomendado este documental en Youtube sobre la Casa de la Cascada que os comparto.'
      },
      {
        title:'Maquetas en películas: La visualización de mundos en miniatura',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Maquetas-en-peliculas-6-Los-Cazafantasmas.jpg',
        descripcion: 'La imaginación de los arquitectos no tiene límites, la magnitud de los proyectos no representa dificultad cuando de dibujar se trata, pero hablemos de la representación física, antes de construir o plasmar un proyecto tangible en tamaño real, tenemos un recurso fantástico que para muchos puede representar un fastidio y un gasto de materiales y hasta de tiempo, pero hay muchos otros que les apasiona y que incluso pueden dedicar todo el tiempo de su vida a hacerlo, hablo de las maquetas.'
      },
      
    ]
  }

}
