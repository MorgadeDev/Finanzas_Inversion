import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimiento } from '../movimiento/movimiento.model';
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';

@Component({
  selector: 'app-editar-movimiento',
  templateUrl: './editar-movimiento.component.html',
  styleUrls: ['./editar-movimiento.component.css']
})
export class EditarMovimientoComponent implements OnInit {
  movimientoEnEdicion: Movimiento | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
        this.movimientoEnEdicion = this.editarMovimientoService.obtenerMovimiento(id);
      }
    }
  }

  guardarEdicion(): void {
    if (this.movimientoEnEdicion) {
      const index = this.editarMovimientoService.movimientos.findIndex(
        (m) => m.id === this.movimientoEnEdicion!.id
      );

      if (index !== -1) {
        this.editarMovimientoService.movimientos[index] = { ...this.movimientoEnEdicion };
      }
    }

    console.log('Guardando edición:', this.movimientoEnEdicion);

    // Redireccionar después de guardar
    this.router.navigate(['/billetera']);
  }
}