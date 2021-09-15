import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Casa de Hacienda Mayorga',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraCasaMayorga.jpg'
      },
      {
        title:'Emmanuel Quintas Campestres',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraEmmanuelCamp.jpg'
      },
      {
        title:'Barbicue en el campo',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraBarbicueCamp.jpg'
      },
      {
        title:'Pizzería Helena',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraPizzeriaHele.jpg'
      },
      {
        title:'Mantenimiento correctivo de pisos de hospital',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraMantHosp.jpg'
      },
      {
        title:'Remodelación dpto. Iñaquito',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraRemodMed.png'
      },
      {
        title:'Remodelación consultorios médicos',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraCasaMayorga.jpg'
      },
      {
        title:'Remodelación dpto. - Área social',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraCasaMayorga.jpg'
      },
      {
        title:'Cubierta alternativa',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraCasaMayorga.jpg'
      },
      {
        title:'Remodelación dpto. Familia García',
        img:'http://discon-001-site1.itempurl.com/Imagenes/obraCasaMayorga.jpg'
      },
    ]
  }

}
