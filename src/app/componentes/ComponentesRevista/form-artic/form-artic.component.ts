import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-artic',
  templateUrl: './form-artic.component.html',
  styleUrls: ['./form-artic.component.css']
})
export class FormArticComponent implements OnInit {
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {

  }

}
