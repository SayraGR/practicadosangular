import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes} from '@angular/router';

import { FormsModule}from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticaComponent } from './practica/practica.component';
import { ComponentsComponent } from './components/components.component';
import { PractidosComponent } from './practidos/practidos.component';



/*import {ServicioService }from './servicio.service';*/
/*import { InicComponent } from './inic/inic.component';*/

const routes: Routes=[
{path: 'pracdos', component:PractidosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent,
    ComponentsComponent,
    PractidosComponent,
    /*InicComponent,*/
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers:[], /*[ServicioService],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
