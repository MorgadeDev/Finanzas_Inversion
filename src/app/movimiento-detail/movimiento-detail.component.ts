import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimiento } from '../movimiento/movimiento.model';
import { MovimientoService } from '../movimiento/movimiento.service';
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';

@Component({
  selector: 'app-movimiento-detail',
  templateUrl: './movimiento-detail.component.html',
  styleUrls: ['./movimiento-detail.component.css']
})
export class MovimientoDetailComponent implements OnInit {
  movimiento: Movimiento | null = null;

  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoService,
    private editarMovimientoService: EditarMovimientoService
  ) {}

  ngOnInit(): void {
    this.cargarMovimiento();
  }

  cargarMovimiento(): void {
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString) {
      const id = +idString;

      if (!isNaN(id)) {
        // Solo intenta cargar el movimiento si id es un número
        this.movimiento = this.movimientoService.obtenerMovimiento(id);
      }
    }
  }

  iniciarEdicion(): void {
    if (this.movimiento) {
      this.editarMovimientoService.iniciarEdicion(this.movimiento);
    }
  }

  guardarEdicion(): void {
  this.editarMovimientoService.guardarEdicion();
 }
}
