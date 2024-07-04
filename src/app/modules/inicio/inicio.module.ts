import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
//componentes importados desde material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ] 
})
export class InicioModule { }
