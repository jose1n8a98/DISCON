import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos-lamparas',
  templateUrl: './elementos-lamparas.component.html',
  styleUrls: ['./elementos-lamparas.component.css']
})
export class ElementosLamparasComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Lampara 1',
        precio:'50.99$',
        img:'https://m.media-amazon.com/images/I/61iG4nZoV-L._AC_SX466_.jpg'
      },
      {
        title:'Lampara de piso',
        precio:'8.00$',
        img:'https://bosque.vteximg.com.br/arquivos/ids/156892-600-600/lampara-de-piso-nabiki-gold.jpg?v=636893303371330000'
      },
      {
        title:'Lampara 2',
        precio:'7.99$',
        img:'https://www.sukasa.com/209508-medium_default/lampara-de-mesa-base-dorada-geometrica-haus.jpg'
      }
      ,
      {
        title:'Vinilo',
        precio:'13.99$',
        img:'https://dbdzm869oupei.cloudfront.net/img/sticker/large/17575.jpg'
      }
      ,
      {
        title:'Lampara 3',
        precio:'7.99$',
        img:'https://www.sukasa.com/153287-medium_default/lampara-de-mesa-con-base-wengue-y-pantalla-conica-catg-298-lampara-pantalla-conica.jpg'
      }
      ,
      {
        title:'Lampara 4',
        precio:'7.99$',
        img:'https://boyaca.com/wp-content/themes/boyaca/vista/imagenes/imgProd/86186.jpg'
      }

      
    ]
  }

}
