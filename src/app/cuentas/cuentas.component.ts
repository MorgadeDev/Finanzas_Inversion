import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Cuenta } from '../cuenta.model';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { EditarMovimientoService } from '../editar-movimiento/editar-movimiento.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, MatButtonModule, MatMenuModule],
})



export class CuentasComponent{

  constructor(private move:EditarMovimientoService){}

  //-------------- AGREGAR CUENTA
  nuevaCuenta: Cuenta = {
    ID: 0,
    Nombre: '',
    Monto: 0,
    Moneda: '',
  };

  mostrarFormulario: boolean = false;

  mostrarFormularioAgregarCuenta(): void {
    this.mostrarFormulario = true;
  }
  OcultarFormularioAgregarCuenta(): void {
    this.mostrarFormulario = false;
  }

  agregarCuenta(): void {
    // Agregar validación aquí si es necesario

    // Agregar la nueva cuenta al arreglo
   
      this.Cuentas.push({ ...this.nuevaCuenta });



      // Reiniciar el formulario
      this.nuevaCuenta = {
        ID: 0,  // Deja el ID en 0 o asigna el valor predeterminado que desees
        Nombre: '',
        Monto: 0,  // Deja el Monto en 0 o asigna el valor predeterminado que desees
        Moneda: '',
        
      };

      this.OcultarFormularioAgregarCuenta();
    
  }


  //--------------

  //-------------- ELIMINAR CUENTA
  mostrarFormularioBorrar: boolean = false;

  mostrarFormularioBorrarCuenta(): void {
    this.mostrarFormularioBorrar = true;
  }

  nombreCuentaSeleccionada: string = '';

  borrarCuenta(): void {
    
      const index = this.Cuentas.findIndex(cuenta => cuenta.Nombre === this.nombreCuentaSeleccionada);
      if (index !== -1) {
        this.Cuentas.splice(index, 1);
      }
      this.nombreCuentaSeleccionada = '';
      this.mostrarFormularioBorrar = false; // Oculta el formulario después de borrar
    
  }
  //--------------

  //-------------- REGISTRAR MOVIMIENTOS

  mostrarFormularioIngreso: boolean = false;
  opcion1(): void {
    this.mostrarFormularioIngreso = true;
    console.log('Opción 1 seleccionada');
  }

  mostrarFormularioGasto: boolean = false;
  opcion2(): void {
    // Lógica para la opción 2
    this.mostrarFormularioGasto = true;
    console.log('Opción 2 seleccionada');
  }

  mostrarFormularioTransferencia: boolean = false;
  opcion3(): void {
    // Lógica para la opción 3
    this.mostrarFormularioTransferencia = true;
    console.log('Opción 3 seleccionada');
  }
  // 
  // Cuenta ORIGEN
  cuentaSeleccionada: number | null = null;
  monto = 0;
  descripcion = "";

  //OPCION 1, SUMAR VALOR
  sumarMonto() {
    console.log(this.monto)
    console.log(this.cuentaSeleccionada)
    
      if (this.cuentaSeleccionada !== null && this.monto !== null) {
        const cuenta = this.Cuentas.find((c) => c.ID == this.cuentaSeleccionada);
        if (cuenta) {
          cuenta.Monto += this.monto;

          this.move.crearMovimiento(cuenta,this.descripcion,"Ingreso")


          this.cuentaSeleccionada = null; // Reiniciar selección
          this.monto = 0; // Reiniciar el valor del monto
          this.mostrarFormularioIngreso = false; // Ocultar formulario
        }
      }
    
  }

  //OPCION 2, GASTO
  RestarMonto() {
    
    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuenta = this.Cuentas.find((c) => c.ID == this.cuentaSeleccionada);
      if (cuenta) {

        cuenta.Monto -= this.monto;

        this.move.crearMovimiento(cuenta,this.descripcion,"Gasto")
        this.cuentaSeleccionada = null; // Reiniciar selección
        this.monto = 0; // Reiniciar el valor del monto
        this.mostrarFormularioGasto = false; // Ocultar formulario
      }
    } 
  
  }

  Cuentas: Cuenta[] =[
    {ID: 1,Moneda: "USD",Nombre: "BBVA",Monto: 150},
    {ID: 2,Moneda: "ARG",Nombre: "Santander",Monto: 1700000},
    {ID: 3,Moneda: "USD",Nombre: "Colchon",Monto: 900},
    {ID: 4,Moneda: "USD ",Nombre: "Paraiso",Monto: 100000}
  ]

  cuentaDestino: number | null = null;
  cuentasVisibles: Cuenta[] = [];
  //OPCION 3, Transferencia
  // Filtrado de cuenta para el segundo form
  Origen() { 
    
    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuentaBuscada = this.Cuentas.find((c) => c.ID == this.cuentaSeleccionada);
      if (cuentaBuscada) {
        this.cuentasVisibles = this.Cuentas.filter((cuentaFilter) => cuentaFilter.Nombre !== cuentaBuscada.Nombre);
      }
    }
    console.log(this.cuentasVisibles);
  
  }

  mostrarAlertaFondosInsuficientes: boolean = false;

  //Segundo form que confirma la transferencia
  Transferencia() {
    
    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuenta = this.Cuentas.find((c) => c.ID == this.cuentaSeleccionada);

      if (cuenta && typeof cuenta.Monto == 'number') {
        if (cuenta.Monto >= this.monto) {
          cuenta.Monto -= this.monto;

          const cuentaDestino = this.Cuentas.find((c) => c.ID == this.cuentaDestino);
          if (cuentaDestino) {
            cuentaDestino.Monto += this.monto;
          }
          this.cuentaSeleccionada = null; // Reiniciar selección
          this.cuentaDestino = null;
          this.monto = 0; // Reiniciar el valor del monto
          this.mostrarFormularioTransferencia = false; // Ocultar formulario
        } else {
          console.log("Monto insuficiente")
          this.mostrarAlertaFondosInsuficientes = true;
        }

      }
    }
  
}
}



