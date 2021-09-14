import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-elementos',
  templateUrl: './cards-elementos.component.html',
  styleUrls: ['./cards-elementos.component.css']
})
export class CardsElementosComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
  }

}
