export class Movimiento {
    id: number;
    nombreCuentaOrigen: string;
    monto: number;
    moneda: string;
    fecha: Date;
    tipo: string;
    descripcion: string;
  
    constructor(
      id: number,
      nombreCuentaOrigen: string,
      monto: number,
      moneda: string,
      fecha: Date,
      tipo: string,
      descripcion: string
    ) {
      this.id = id;
      this.nombreCuentaOrigen = nombreCuentaOrigen;
      this.monto = monto;
      this.moneda = moneda;
      this.fecha = fecha;
      this.tipo = tipo;
      this.descripcion = descripcion;
    }
  }