export class Movimiento{
    descripcion: string;
    fecha: Date;
    tipoMovimiento: string;
    id: number;
    monto: number;
   
  
    constructor(
      descripcion: string,
      tipoMovimiento: string,
      id: number,
      monto: number,
      
    ) {
      this.descripcion = descripcion;
      this.fecha = new Date;
      this.tipoMovimiento = tipoMovimiento;
      this.id = id;
      this.monto = monto;
      

    }
}