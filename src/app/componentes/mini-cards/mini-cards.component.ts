import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-cards',
  templateUrl: './mini-cards.component.html',
  styleUrls: ['./mini-cards.component.css']
})
export class MiniCardsComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
  }

}
