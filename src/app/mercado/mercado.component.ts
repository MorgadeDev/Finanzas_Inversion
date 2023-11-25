import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { firstValueFrom } from 'rxjs';
import {Chart} from 'angular-highcharts'

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})

export class MercadoComponent {
  
  
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.MyTestFunction();
    this.getSymbols();
  }
  precios: any[] = []
  nombres: any[] = []
  timeSeries: any[] = []

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Acciones APPL'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Precio de cierre',
        data: [191.49001, 191.41000, 189.89000, 190.25000, 189.57001, 187.85001, 187.70000, 185.82001, 183.97000, 182.96001
          , 182.35001, 179.17999, 176.38000, 174.24001, 175.52000, 171.00000, 169.35001, 169.02000, 166.91000, 170.37000, 171.88000,
          173.05000, 170.91000, 175.31000, 176.03999, 175.58000, 176.64999, 176.75000, 181.42000, 180.07001]
      } as any
    ]

  })

  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Acciones YPF'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Precio de cierre',
        data: [181.49001, 151.41000, 139.89000, 120.25000, 119.57001, 127.85001, 147.70000, 155.82001, 163.97000, 162.96001
          , 162.35001, 169.17999, 176.38000, 174.24001, 175.52000, 171.00000, 169.35001, 169.02000, 166.91000, 170.37000, 171.88000,
          173.05000, 170.91000, 175.31000, 176.03999, 175.58000, 176.64999, 176.75000, 181.42000, 180.07001]
      } as any
    ]
})
  opcionSeleccionada: string = '';

  async getSymbols(): Promise<string[]> {
    return await new Promise(async (resolve, reject) => {
      const data = await firstValueFrom(this.apiService.symbols())
      const arr: any[] = [];

      data.data.forEach((element: any) => {
        arr.push(element.symbol)
      });

      resolve(arr)
    });
  };

  async llenarData(tickers: string[]) {
    return await new Promise(async (resolve, reject) => {
      const data = await firstValueFrom(this.apiService.currentPrices(tickers)).catch(error => {
        console.error('Error en la llamada a la API:', error);
        throw error});

      resolve(data);
    });
  }

  async completarGraficos(ticker: string): Promise<any[]> {
    return await new Promise(async (resolve, reject) => {
      const data = await firstValueFrom(this.apiService.timeSeries(ticker)).catch(error => {
        console.error('Error en la llamada a la API:', error);
        throw error});

      resolve(data);
    });
  }
  
  async MyTestFunction() {
    this.precios = await this.getSymbols();
    console.log(this.precios);
    
    this.nombres = await this.llenarData(this.precios) as number[]
    console.log(this.nombres);
    
    this.timeSeries = await this.completarGraficos('AAPL'); 
    console.log(this.timeSeries);
    
  }
}

