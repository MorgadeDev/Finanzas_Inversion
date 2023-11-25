import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientoListComponent } from './movimiento-list/movimiento-list.component';
import { BilleteraComponent } from './billetera/billetera.component';
import { GraficoComponent } from './grafico/grafico.component';
import { MercadoComponent } from './mercado/mercado.component';
import { EditarMovimientoComponent } from './editar-movimiento/editar-movimiento.component';
const routes: Routes = [
  { path: 'mercado', component: MercadoComponent},
  { path: 'grafico', component: GraficoComponent},
  { path: 'editar/:id', component: EditarMovimientoComponent },
  { path: 'billetera', component: BilleteraComponent},
  { path: 'movimientos', component: MovimientoListComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
