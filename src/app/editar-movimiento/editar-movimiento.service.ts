import { Injectable } from '@angular/core';
import { Movimiento } from '../movimiento/movimiento.model';
import { Cuenta } from '../cuenta.model';
@Injectable({
  providedIn: 'root',
})
export class EditarMovimientoService {
 
  crearMovimiento(data:Cuenta,desc:string,tipo:string){

    let dat = new Movimiento(data.ID,data.Nombre,data.Monto,data.Moneda,new Date(),tipo,desc);

    this.movimientos.unshift(dat)
  }

  movimientoEnEdicion: Movimiento | null = null;

  iniciarEdicion(movimiento: Movimiento): void {
    this.movimientoEnEdicion = { ...movimiento };
  }

   guardarEdicion(): Movimiento | null {
    if (this.movimientoEnEdicion) {
      const index = this.movimientos.findIndex((m) => m.id === this.movimientoEnEdicion!.id);

      if (index !== -1) {
        const movimientoEditado: Movimiento = { ...this.movimientoEnEdicion };
        this.movimientos[index] = movimientoEditado;

        console.log('Edición guardada:', movimientoEditado);  // Logguemos el movimiento editado
        return movimientoEditado;
      }
    }

    console.log('Edición guardada: null');
    return null;
  }
  
  obtenerMovimiento(id: number): Movimiento | null {
    const movimiento = this.movimientos.find((m) => m.id === id);
    return movimiento || null;
  }

  obtenerMovimientos(): Movimiento[] {
    return [...this.movimientos];
  }

    actualizarMovimientos(movimientoEditado: Movimiento): void {
    const index = this.movimientos.findIndex((m) => m.id === movimientoEditado.id);

    if (index !== -1) {
      this.movimientos[index] = { ...movimientoEditado };
    }
  }
  movimientos: Movimiento[] = [
    new Movimiento(4, 'Paraiso', 500000, 'USD', new Date(), 'Ingreso', 'Servicios Exterior'),
    new Movimiento(4, 'Paraiso', 500000, 'USD', new Date(), 'Ingreso', 'Servicios Exterior'),
    new Movimiento(3, 'Colchon', 100, 'USD', new Date(), 'Gasto', 'Ahorro Universidad'),
    new Movimiento(3, 'Colchon', 500, 'USD', new Date(), 'Gasto', '- Ahorro Universidad'),
    new Movimiento(3, 'Colchon', 1500, 'USD', new Date(), 'Ingreso', 'Ahorro Universidad'),
    new Movimiento(2, 'Santander', 1700000, 'ARG', new Date(), 'Ingreso', 'Deposito Haberes'),
    new Movimiento(1, 'BBVA', 150, 'USD', new Date(), 'Gasto', 'Division de herencia'),
    new Movimiento(1, 'BBVA', 300, 'USD', new Date(), 'Ingreso', 'Herencia Abuela'),
    // Instancias reales de los movimientos
  ];

}