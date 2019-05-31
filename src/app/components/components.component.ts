import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';

/*import {ServicioService} from '.././servicio.service';*/

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
 
  
  @Input() Agregados;

  /*rForm: FormGroup;*/

  Nombre=null;
  Apellidop=null;
  Apellidom=null;
  Sexo=null;
  Edad=null;
  Correo=null;
  

  //Nombre:string="";
  //Apellidop:string="";
  //Apellidom:string="";
  //Sexo:string="";
  //Edad:string="";
  //Correo:string="";
  
  Agregar=function()
  {
    if(this.Validacion() && this.ValidacionNombre(this.Nombre) && this.ValidacionNombre(this.ApellidoM) && this.ValidacionNombre(this.ApellidoP) && this.ValidacionEdad()){
    this.Agregados.push({
      Nombre:this.Nombre,
      Apellidop:this.Apellidop,
      Apellidom:this.Apellidom,
      Sexo:this.Sexo,
      Edad:this.Edad,
      Correo:this.Correo,
      icono:Math.floor(Math.random()*10).toString()
     
    });
  };

  };
  Validacion = function()
  {
    var Filtro = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.([a-zA-Z0-9]{2,4})+$/;
    if (!Filtro.test(this.Correo))
    {
      alert('Ingrese un Correo Valido');
      return false;
    };
    return true;

  };

 


  ValidacionEdad = function()
  {
    var Filtro = /^([0-9])+$/;
    if (!Filtro.test(this.Edad))
    {
     
            alert('Ingrese una Edad Valida');
          return false;
    };
    if(this.Edad.length<=2){
      
      return true;
          }
          else {
            alert('No es  una Edad Valida');
          return false;
        }
    
  };

  ValidacionNombre = function(param)
  {
    var Filtro = /^([a-zA-Z])+$/;
    if (!Filtro.test(param))
    {
      alert('Ingresa un Nombre Valido');
      return false;
    };
    return true;
  };

  
  ngOnInit() {
  }

   
}

 /* constructor(private fb: FormBuilder)
  {
    this.rForm=fb.group({
      'Nombre':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])],
      'Apellidop':[null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])],
      'Apellidom':[null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])],
      'Sexo':[null, Validators.required],
      'Edad':[null,Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(2)])],
      'Correo':[null,Validators.required,Validators.email]

    });
  }*/
 
  /* addpost(post)
   {
     this.Nombre=post.Nombre;
     this.Apellidop=post.Apellidop;
     this.Apellidom=post.Apellidom;
     this.Sexo=post.Sexo;
     this.Edad=post.Edad;
     this.Correo=post.Correo;
     icono:Math.round((Math.random()*(9 - 1)+ 1))
   }*/
  