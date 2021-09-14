import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-venta',
  templateUrl: './card-venta.component.html',
  styleUrls: ['./card-venta.component.css']
})
export class CardVentaComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
