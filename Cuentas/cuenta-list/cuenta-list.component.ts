import { Component,ViewEncapsulation } from '@angular/core';
import { Cuenta } from './../cuenta.model';

@Component({
  selector: 'app-cuenta-list',
  templateUrl: './cuenta-list.component.html',
  styleUrls: ['./cuenta-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CuentaListComponent {

  cuentas: Cuenta[] = [
    { ID: 1, Nombre: 'Cuenta 1', Monto: 1000, Moneda: 'USD' },
    { ID: 2, Nombre: 'Cuenta 2', Monto: 2500, Moneda: 'EUR' },
    // Agrega más cuentas según sea necesario
  ];


  //-------------- AGREGAR CUENTA
        nuevaCuenta: Cuenta = {
          ID: 0,  // Deja el ID en 0 o asigna el valor predeterminado que desees
          Nombre: '',
          Monto: 0,  // Deja el Monto en 0 o asigna el valor predeterminado que desees
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
          this.cuentas.push({ ...this.nuevaCuenta });
        
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
            const index = this.cuentas.findIndex(cuenta => cuenta.Nombre === this.nombreCuentaSeleccionada);
            if (index !== -1) {
              this.cuentas.splice(index, 1);
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

  //OPCION 1, SUMAR VALOR
  sumarMonto() {
    console.log(this.monto)
    console.log(this.cuentaSeleccionada)

    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuenta = this.cuentas.find((c) => c.ID == this.cuentaSeleccionada);
      if (cuenta) {
        cuenta.Monto += this.monto;
        this.cuentaSeleccionada = null; // Reiniciar selección
        this.monto= 0; // Reiniciar el valor del monto
        this.mostrarFormularioIngreso = false; // Ocultar formulario
        }
      }
    }

  //OPCION 2, GASTO
  RestarMonto(){
    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuenta = this.cuentas.find((c) => c.ID == this.cuentaSeleccionada);
        if (cuenta ) {
            
              cuenta.Monto -= this.monto;
              this.cuentaSeleccionada = null; // Reiniciar selección
              this.monto= 0; // Reiniciar el valor del monto
              this.mostrarFormularioGasto = false; // Ocultar formulario
              }
      }
  }

  cuentaDestino: number | null = null;
  cuentasVisibles: Cuenta[] = [];
  //OPCION 3, Transferencia
  // Filtrado de cuenta para el segundo form
  Origen(){
    if(this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuentaBuscada = this.cuentas.find((c) => c.ID == this.cuentaSeleccionada);
      if(cuentaBuscada){
        this.cuentasVisibles = this.cuentas.filter((cuentaFilter) => cuentaFilter.Nombre !== cuentaBuscada.Nombre);
      }
      }
      console.log(this.cuentasVisibles);
    }

    mostrarAlertaFondosInsuficientes: boolean = false;

    //Segundo form que confirma la transferencia
  Transferencia(){
    if (this.cuentaSeleccionada !== null && this.monto !== null) {
      const cuenta = this.cuentas.find((c) => c.ID == this.cuentaSeleccionada);

      if (cuenta && typeof cuenta.Monto == 'number') {
        if(cuenta.Monto >= this.monto){
          cuenta.Monto -= this.monto;

          const cuentaDestino = this.cuentas.find((c) => c.ID == this.cuentaDestino);
          if( cuentaDestino){
            cuentaDestino.Monto += this.monto;
          }
          this.cuentaSeleccionada = null; // Reiniciar selección
          this.cuentaDestino = null;
          this.monto= 0; // Reiniciar el valor del monto
          this.mostrarFormularioTransferencia = false; // Ocultar formulario
        }else{
          console.log("Monto insuficiente")
          this.mostrarAlertaFondosInsuficientes = true;
        }

        }
      }
  }

  



}

