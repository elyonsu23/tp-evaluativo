import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { HerramientasElecComponent } from './pages/herramientas-elec/herramientas-elec.component';
import { HerramientasManComponent } from './pages/herramientas-man/herramientas-man.component';
import { PintureriaComponent } from './pages/pintureria/pintureria.component';
import { ElectricidadComponent } from './pages/electricidad/electricidad.component';


@NgModule({
  declarations:[
    HerramientasElecComponent,
    HerramientasManComponent,
    PintureriaComponent,
    ElectricidadComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    HerramientasElecComponent,
    HerramientasManComponent,
    PintureriaComponent,
    ElectricidadComponent
  ]

})
export class ProductoModule { }
