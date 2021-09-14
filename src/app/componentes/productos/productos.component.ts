import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Ferreteria',
        img:'https://st2.depositphotos.com/2219414/9520/v/600/depositphotos_95204468-stock-illustration-hand-work-tools-box-set.jpg'
      },
      {
        title:'Lamparas',
        img:'https://m.media-amazon.com/images/I/51pihwx4O7S._AC_SX425_.jpg'
      },
      {
        title:'Concrete items',
        img:'https://i.pinimg.com/originals/09/8e/0d/098e0deb9e398ecc0356afed44587af4.jpg'
      }
    ]
  }

}
