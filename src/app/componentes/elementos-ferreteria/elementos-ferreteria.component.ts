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
        title:'Lima',
        precio:'5.99$',
        img:'data:image/jpeg;base64,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'
      },
      {
        title:'Martillo',
        precio:'8.00$',
        img:'https://cdn-img.globalrustrade.com/i/e/eFBtj24SV0/2420.jpg'
      },
      {
        title:'Casco amarillo',
        precio:'7.99$',
        img:'https://i1.wp.com/redsuministros.com/wp-content/uploads/2020/01/3M_H-702R.jpg?fit=900%2C900&ssl=1'
      }
      ,
      {
        title:'Flexometro',
        precio:'13.99$',
        img:'https://www.tecnimetro.com.ec/wp-content/uploads/2019/05/30-615_600px-600x600.jpg'
      }
      ,
      {
        title:'Combo',
        precio:'7.99$',
        img:'https://www.promesa.com.ec/wp-content/uploads/2020/06/31258-1.png'
      }
      ,
      {
        title:'Casco amarillo',
        precio:'7.99$',
        img:'https://i1.wp.com/redsuministros.com/wp-content/uploads/2020/01/3M_H-702R.jpg?fit=900%2C900&ssl=1'
      }

      
    ]
  }

}
