import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'La cafetera de hormigón que todo estudio de arquitectura se merece',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Cafetera-de-hormigon-01-1024x576.jpg',
        descripcion: 'Si llevas unos años disfrutando de la Espresso Solo quizás te apetezca una renovación. Y si no, ya va siendo hora de colocar en tu estudio una cafetera de hormigón. Un capricho, caro sin duda, pero es de hormigón'
      },
      {
        title:'Cojín con forma de archivador A-Z',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Cojin-archivador.jpg',
        descripcion: 'Con el calor que estamos teniendo este verano es irremediable que no nos entre algo de sueño justo después de comer y que necesitemos una reparadora siesta para afrontar el resto de la jornada laboral.'
      },
      {
        title:'Vivienda neoyorquina en el Born de Manuel Torres Design',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/manuel2.jpg',
        descripcion: 'El estudio de diseño e interiorismo Manuel Torres Design, ha diseñado y reformado el nuevo apartamento, que se encuentra en el famoso barrio del Born, en el centro histórico de Barcelona; al lado de la calle Argentería.'
      },
      {
        title:'Tunea tu sombrero de graduación con petaca incorporada',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Sombrero-graducacion-petaca-1.jpg',
        descripcion: 'Estamos al final del curso, comienzan las ceremonias de graduación, y qué mejor forma de celebrar el título de arquitecto que bebiendo con los amigos como has hecho el resto de la carrera.'
      },
    ]
  }

}
