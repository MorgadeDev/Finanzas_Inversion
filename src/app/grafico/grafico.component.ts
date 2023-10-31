import { Component } from '@angular/core';
import {Chart} from 'angular-highcharts'

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent {
  lineChart=new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Patients'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Patients admitted',
          data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
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
          { name: 'Dolars', y: 1, color: '#eeeeee'},
          { name: 'Pesos', y: 2, color: '#393e46'},
          { name: 'Sol' , y: 3, color: '#00adb5'},
        ]
      }
    ]
  })
}
