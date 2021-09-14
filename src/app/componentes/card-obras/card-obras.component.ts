import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-obras',
  templateUrl: './card-obras.component.html',
  styleUrls: ['./card-obras.component.css']
})
export class CardObrasComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
  }

}
