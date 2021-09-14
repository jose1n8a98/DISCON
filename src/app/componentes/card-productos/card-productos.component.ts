import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.css']
})
export class CardProductosComponent implements OnInit {
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
