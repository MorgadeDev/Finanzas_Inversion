import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';
import { Movimiento } from '../movimiento/movimiento.model';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ScrollingModule, MatRadioModule, FormsModule, NgFor]
})
export class MonedaComponent implements OnInit {
  movimientos: Movimiento[] = [];

  constructor(private editarMovimientoService: EditarMovimientoService) {}

  ngOnInit(): void {
    this.movimientos = this.editarMovimientoService.movimientos;

  }
  
  monedaSeleccionadas: string | undefined;
  Monedas: string[] = ['USD','ARG','BIT'];
}
