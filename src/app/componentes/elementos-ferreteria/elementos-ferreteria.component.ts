import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elementos-ferreteria',
  templateUrl: './elementos-ferreteria.component.html',
  styleUrls: ['./elementos-ferreteria.component.css']
})
export class ElementosFerreteriaComponent implements OnInit {
  public cards : Array<any> = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.cards = [
      {
        title:'Alicate',
        precio:'5.99$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/alicate.jpg'
      },
      {
        title:'Martillo',
        precio:'8.00$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/martillo.jpg'
      },
      {
        title:'Des. Estrella',
        precio:'7.99$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/desestrella.png'
      }
      ,
      {
        title:'Flexometro',
        precio:'13.99$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/flex.jpg'
      }
      ,
      {
        title:'Torinillo',
        precio:'7.99$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/tornillo.png'
      }
      ,
      {
        title:'Taladro',
        precio:'7.99$',
        img:'http://discon-001-site1.itempurl.com/Imagenes/taladro.jpg'
      }
    ]
  }

}
