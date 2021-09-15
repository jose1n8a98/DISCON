import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  _url='http://discon-001-site1.itempurl.com/api/Productos/Listar'
  
  constructor(private http:HttpClient) { }


}
