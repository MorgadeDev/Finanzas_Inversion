import { Component, OnInit } from '@angular/core';
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';
import { Movimiento } from '../movimiento/movimiento.model';

@Component({
  selector: 'app-movimiento-list',
  templateUrl: './movimiento-list.component.html',
  styleUrls: ['./movimiento-list.component.css']
})
export class MovimientoListComponent implements OnInit {
  movimientos: Movimiento[] = [];

  constructor(private editarMovimientoService: EditarMovimientoService) {}

  ngOnInit(): void {
  // Simulación: Cargar movimientos desde un servicio o donde los tengas
  this.movimientos = this.editarMovimientoService.movimientos;
}

verDetalle(movimiento: Movimiento): void {
  console.log('Ver Detalle:', movimiento);
  this.editarMovimientoService.iniciarEdicion(movimiento);
}
}