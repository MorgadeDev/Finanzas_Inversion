import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BilleteraComponent } from './billetera/billetera.component';
import { MercadoComponent } from './mercado/mercado.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { RegistrosComponent } from './registros/registros.component';
import { MonedaComponent } from './moneda/moneda.component';
import {MatButtonModule} from '@angular/material/button';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BilleteraComponent,
    MercadoComponent,
    GraficoComponent,
    RegistrosComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NavbarComponent,
    MatButtonModule,
    MonedaComponent,
    ChartModule,
    CuentasComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
