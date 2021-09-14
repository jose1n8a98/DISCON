import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {
  public cards : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        title:'Casa de Hacienda Mayorga',
        img:'https://tse1.mm.bing.net/th?id=OIP.XtOfo021pJJ_AigZpI1VywHaEy&pid=Api'
      },
      {
        title:'Emmanuel Quintas Campestres',
        img:'http://images.adsttc.com/media/images/5910/48b3/e58e/ce65/4200/03d2/large_jpg/IMG_2037.jpg?1494239395'
      },
      {
        title:'Barbicue en el campo',
        img:'https://images.adsttc.com/media/images/5012/0354/28ba/0d55/8100/0198/large_jpg/stringio.jpg?1414036340'
      },
      {
        title:'Pizzería Helena',
        img:'http://www.arquifach.com/wp-content/uploads/2017/10/DSC00662.jpg'
      },
      {
        title:'Mantenimiento correctivo de pisos de hospital',
        img:'https://www.arqhys.com/arquitectura/wp-content/uploads/2018/05/Qu%C3%A9-es-la-arquitectura-moderna.jpg'
      },
      {
        title:'Remodelación dpto. Iñaquito',
        img:'https://revistadigital.inesem.es/gestion-integrada/files/2016/08/Untitled-1.png'
      },
      {
        title:'Remodelación consultorios médicos',
        img:'https://images.adsttc.com/media/images/586e/6d10/e58e/cef4/9f00/020b/large_jpg/01.jpg?1483631867'
      },
      {
        title:'Remodelación dpto. - Área social',
        img:'https://tse1.mm.bing.net/th?id=OIP.XtOfo021pJJ_AigZpI1VywHaEy&pid=Api'
      },
      {
        title:'Cubierta alternativa',
        img:'https://tse1.mm.bing.net/th?id=OIP.XtOfo021pJJ_AigZpI1VywHaEy&pid=Api'
      },
      {
        title:'Remodelación dpto. Familia García',
        img:'https://tse1.mm.bing.net/th?id=OIP.XtOfo021pJJ_AigZpI1VywHaEy&pid=Api'
      },
    ]
  }

}
