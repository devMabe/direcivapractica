import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Listado de empleados';
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  salario: number = 0;
  vacio: boolean = false;
  mensaje: string = "";
  color: string = "";

  empleados: Empleado[] = [
    new Empleado("prueba", "pruebbaApe", "fontend", 3000),
    new Empleado("prueba", "pruebbaApe", "fontend", 3000),
    new Empleado("prueba", "pruebbaApe", "fontend", 3000),

  ];


  addUsusario(): void {
    if (this.nombre === "" || this.apellido === "" || this.cargo === "" || this.salario === 0) {
      this.vacio = true;
      this.mensaje = "¡No se permiten campos vacios!";
      this.color = "danger";
    } else {
      this.vacio = false;
      this.empleados.push(new Empleado(this.nombre, this.apellido, this.cargo, this.salario))
      this.limpiar()
    }

  }

  limpiar(): void {
    this.nombre = "";
    this.apellido = ""
    this.cargo = ""
    this.salario = 0;
  }
}
