import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos-concrete-items',
  templateUrl: './elementos-concrete-items.component.html',
  styleUrls: ['./elementos-concrete-items.component.css']
})
export class ElementosConcreteItemsComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Cenisero',
        precio:'5.99$',
        img:'https://i.pinimg.com/564x/1b/df/3b/1bdf3b5f810e34ca97dd0f803c218cb2.jpg'
      },
      {
        title:'Lampara',
        precio:'8.00$',
        img:'https://www.ignant.com/wp-content/uploads/2014/04/Top10_Concrete_Items_001-360x360.jpg'
      },
      {
        title:'Casita',
        precio:'7.99$',
        img:'data:image/jpeg;base64,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'
      }
      ,
      {
        title:'Adorno',
        precio:'13.99$',
        img:'https://cdn.designrulz.com/wp-content/uploads/2015/01/modern-concrete-design-designrulz-1.jpg'
      }
      ,
      {
        title:'Macetero',
        precio:'7.99$',
        img:'data:image/jpeg;base64,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'
      }
      ,
      {
        title:'Atelier Ideco',
        precio:'7.99$',
        img:'https://m.media-amazon.com/images/I/61RUGgUqODL._SL1368_.jpg'
      }      
    ]
  }

}
