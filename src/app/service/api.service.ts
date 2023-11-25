import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectEach } from 'highcharts';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  TDKEY = '718e511cbeee407cb4755d0f75e68770'
  public currentPrices(tickers: string[]): Observable<{ [ticker: string]: any }> {

    // Limitar el número de solicitudes a realizar
    let tickersToProcess = tickers.slice(44495, 44501);

    // Crear observables para cada ticker y concatenar las solicitudes
    const observables = tickersToProcess.map(ticker => {
      const TDURL = `https://api.twelvedata.com/price?symbol=${ticker}&apikey=${this.TDKEY}`;
      return this.http.get<any>(TDURL).pipe(

        // Puedes usar map para agregar el ticker a la respuesta del HTTP
        map((response: any) => ({ ticker, data: response })),
        catchError(error => {
          console.error('Error para el ticker ${ticker}:', error);
          // Eliminar el ticker del array
          tickersToProcess = tickersToProcess.filter(t => t !== ticker);

          // Puedes devolver un observable que emite un objeto vacío
          return of({});
        })
      );
    });

    const combinedObservables = forkJoin(observables)

    

    return combinedObservables
  }

  public timeSeries(ticker: string) {
      const TDURL = `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=1day&apikey=${this.TDKEY}`;
      return this.http.get<any>(TDURL);
  } 

  public symbols() {
    const SBURL = 'https://api.twelvedata.com/stocks'
    return this.http.get<any>(SBURL);
  }
}
