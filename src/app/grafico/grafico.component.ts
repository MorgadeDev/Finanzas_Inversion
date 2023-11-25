import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts'
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';
import { Movimiento } from '../movimiento/movimiento.model';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnInit{
  movimientos: Movimiento[] = [];
  montos = this.movimientos.map(obj => obj.monto)
  monto = this.sumarArreglo(this.montos)
  constructor(private editarMovimientoService: EditarMovimientoService) {}

  ngOnInit(): void {
    this.movimientos = this.editarMovimientoService.movimientos;
    console.log(this.monto);
    

  }
  sumarArreglo(valores: any[]) {
    // Verificar si el arreglo está vacío
    if (valores.length === 0) {
      return 1;
    }
    // Utilizar el método reduce para sumar todos los valores del arreglo
    const suma = valores.reduce((total, valor) => total + valor, 0);

    return suma;}
  lineChart=new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Peso -> Dolar'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Tasa conversion',
          data: [980, 990, 970, 920, 915, 925, 925, 925, 890, 890, 950, 960, 925, 925, 970, 950, 950, 1075, 1500]
        } as any
      ]
  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },

      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Monedas',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Dolars', y: this.monto, color: '#eeeeee'},
          { name: 'Pesos', y: 2, color: '#393e46'},
          { name: 'Sol' , y: 3, color: '#00adb5'},
        ]
      }
    ]
  }
  
  )

  

}
