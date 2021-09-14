import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos-moviliario',
  templateUrl: './elementos-moviliario.component.html',
  styleUrls: ['./elementos-moviliario.component.css']
})
export class ElementosMoviliarioComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Cocina',
        precio:'200.99$',
        img:'https://i1.wp.com/www.mueblesmv.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-08-27-at-11.39.46-AM.jpeg?resize=300%2C300&ssl=1'
      },
      {
        title:'Escritorio',
        precio:'400.00$',
        img:'https://cdn.shopify.com/s/files/1/0401/1589/6480/files/Marento2_1000x1000_crop_center.jpg?v=1590884565'
      },
      {
        title:'Sillas',
        precio:'7.99$',
        img:'https://i.blogs.es/70476b/amazonmaderadepalisandrorect/450_1000.jpg'
      }
      ,
      {
        title:'Comedor',
        precio:'240.99$',
        img:'https://www.mueblesromerohosteleria.com/public/assets/images/comunicacion/c-47/med/comunicacion-Untitled%20design.jpg'
      }
      ,
      {
        title:'Comedor 2',
        precio:'300.99$',
        img:'https://misterwils.com/wp-content/uploads/2020/11/misterwils-destacado-home-muebles-para-restaurantes-1-1.jpg'
      }
      ,
      {
        title:'Sala',
        precio:'500.99$',
        img:'https://cdn.shopify.com/s/files/1/0401/1589/6480/files/Imagen-Arbol-Mobiliario2_300x300.jpg?v=1594936008'
      }

      
    ]
  }

}
