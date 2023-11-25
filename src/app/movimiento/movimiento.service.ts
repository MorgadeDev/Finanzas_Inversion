import { Injectable } from '@angular/core';
import { Movimiento } from './movimiento.model';
import { Cuenta } from '../cuenta.model';
@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
 
  private movimientos: Movimiento[] = [
    new Movimiento(1, 'Cuenta 1', 100, 'USD', new Date(), 'Ingreso', 'Descripción 1'),
    new Movimiento(2, 'Cuenta 2', 150, 'EUR', new Date(), 'Gasto', 'Descripción 2'),
    // ... otros movimientos
  ];


  obtenerMovimientos(): Movimiento[] {
    return this.movimientos;
  }

  obtenerMovimiento(id: number): Movimiento | null {
    return this.movimientos.find(m => m.id === id) || null;
  }

  actualizarMovimiento(movimientoActualizado: Movimiento): void {
    const index = this.movimientos.findIndex(m => m.id === movimientoActualizado.id);

    if (index !== -1) {
      this.movimientos[index] = { ...movimientoActualizado };
    }
  }
}