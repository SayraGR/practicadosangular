 import { Injectable } from '@angular/core';

  import { tarea } from './tarea';
@Injectable({
  providedIn: 'root'
})

export class ServicioService {
 Tareas: tarea[];
 icono:String[]=['fas fa-address-book','fas fa-air-freshener',
 'fas fa-allergies', 'fas fa-allergies','fas fa-ambulance',
  'fab fa-angellist','fab fa-airbnb','fas fa-angry',
  'fab fa-angular','fas fa-apple-alt'];

  constructor() { 
    this.Tareas =[
     // {nombre:'sayra', apellidop: 'rodriguez',apellidom:'Galindo',edad:'20',coreo:'sbrg@hotmail.com',icono:'<i class="fas fa-user"></i>'},
      //{nombre:'Moises', apellidop: 'robledo',apellidom:'robledo',edad:'21',coreo:'moises@hotmail.com',icono:'fas fa-user'}
    ];
  }
 
/*obtener */
  getTarea(){ 
    return this.Tareas;
  }

 
 
    addtarea(Tareas:tarea){
       this.Tareas.push(Tareas);
      
    }

    iconrandon(){
   
  }

}
