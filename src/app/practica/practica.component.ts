
import { Component, OnInit, Input} from '@angular/core';

import { ServicioService } from '.././servicio.service';
import { tarea } from '../tarea';


@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() Agregados;

  /*constructor( ){}
    Borrar=function()
    {
      this.Agregados.pop();
    };
  */

  ngOnInit() {
 
  }



}
