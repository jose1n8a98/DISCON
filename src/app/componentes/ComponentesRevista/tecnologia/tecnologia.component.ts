import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Shadowmap – Mapa virtual de las sombras de tu ciudad',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Shadowmap-1-1024x545.jpg',
        descripcion: 'Con el calor que hace poder planificar un paseo por la sombra nunca viene mal y para ello una aplicación que nos muestre las zonas de sombra de nuestra ciudad puede ser de gran utilidad, y justo algo …'
      },
      {
        title:'El acercamiento a la arquitectura digital interactiva durante 2020',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Arquitectura-Digital-2-Puerto-Comercial-1024x576.jpg',
        descripcion: 'El desarrollo tecnológico de los últimos años nos dio alternativas para hacer nuestras actividades cotidianas, aunque lo común era acudir presencialmente a un lugar también podíamos realizar algunas …'
      },
      {
        title:'Eligiendo motor de renderizado',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/Elegir-motor-renderizado-LUMION-1024x576.jpg',
        descripcion: 'Al iniciar la aventura del modelado arquitectónico 3d es común no saber que programa utilizar para renderizar proyectos, a ti, estimado lector relato mi historia:Cuando el estudiante de la carrera … '
      },
      {
        title:'AMS mini | Pieza de diseño contra la Covid-19 impreso en 3D',
        img:'https://www.cosasdearquitectos.com/wp-content/uploads/AMS-mini-1.jpg',
        descripcion: 'El AMS Mini (The Air Management System Series) es un sistema de gestión de aire modular, fabricado en 3D y diseñado para aplicaciones en que se necesitan grandes volúmenes de aire sin emisiones.'
      },
    ]
  }

}
