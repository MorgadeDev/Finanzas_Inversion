import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MovimientoListComponent } from './movimiento-list/movimiento-list.component';
import { MovimientoDetailComponent } from './movimiento-detail/movimiento-detail.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { EditarMovimientoComponent } from './editar-movimiento/editar-movimiento.component';
import { FormsModule } from '@angular/forms';
import { BilleteraComponent } from './billetera/billetera.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { GraficoComponent } from './grafico/grafico.component';
import { ChartModule } from 'angular-highcharts';
import { MercadoComponent } from './mercado/mercado.component';
import { HttpClientModule } from '@angular/common/http';
import { MonedaComponent } from './moneda/moneda.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimientoListComponent,
    MovimientoDetailComponent,
    MovimientoComponent,
    EditarMovimientoComponent,
    BilleteraComponent,
    GraficoComponent,
    MercadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    FormsModule,
    CuentasComponent,
    ChartModule,
    HttpClientModule,
    MonedaComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
