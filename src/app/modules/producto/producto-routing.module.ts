import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricidadComponent } from './pages/electricidad/electricidad.component';
import { HerramientasElecComponent } from './pages/herramientas-elec/herramientas-elec.component';
import { HerramientasManComponent } from './pages/herramientas-man/herramientas-man.component';
import { PintureriaComponent } from './pages/pintureria/pintureria.component';

const routes: Routes = [
  {
    path: "electricidad", component: ElectricidadComponent
  },
  {
    path: "herrElectricas", component: HerramientasElecComponent
  },
  {
    path: "herrManuales", component: HerramientasManComponent
  },
  {
    path: "pintureria", component: PintureriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
