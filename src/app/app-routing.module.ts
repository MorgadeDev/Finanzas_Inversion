import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MercadoComponent } from './mercado/mercado.component';
import { BilleteraComponent } from './billetera/billetera.component';
import { GraficoComponent } from './grafico/grafico.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'mercado', component: MercadoComponent},
  { path: 'billetera', component: BilleteraComponent},
  { path: 'grafico', component: GraficoComponent},
  { path: '', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
