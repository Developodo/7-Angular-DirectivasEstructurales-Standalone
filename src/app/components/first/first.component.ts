import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  public nombre: string = '';
  public edad: number = 10;
  private timeout!: any;

  estiloLetras = {
    color: this.edad < 18 ? 'red' : 'green',
    'font-weight': this.edad < 18 ? 'bold' : 'normal',
  };

  clasesBorde = ['contenedor', 'normal'];

  personas: { nombre: string; edad: number }[] = [];

  incrementaEdad(): void {
    this.edad++;
    this.cambiaBorde(['contenedor', 'incrementa']);
  }
  decrementaEdad(): void {
    this.edad--;
    this.cambiaBorde(['contenedor', 'decrementa']);
  }
  inserta(): void {
    alert(`${this.nombre} puede sacarse la licencia`);

    this.personas.push({
      nombre: this.nombre,
      edad: this.edad,
    });

    this.resetea();
  }

  poneMayuscula(event?: Event): void {
    this.nombre = this.nombre.toUpperCase().trim();
  }
  resetea(): void {
    this.nombre = '';
    this.edad = 10;
  }

  private cambiaBorde(clases: string[] = ['contenedor', 'normal']): void {
    this.clasesBorde = clases;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.clasesBorde = ['contenedor', 'normal'];
      this.timeout = undefined;
    }, 1000);
  }

  /**
   * Opcional, para optimizar el indexado de *ngFor.
   * Modifica el campo por el cuál ngFor itera y
   * vigila si un objeto ya no está o ha sido modificado
   * para poder "repintar" la plantilla
   */
  trackByFunction(index: number, item: any) {
    return item.nombre;
  }
}
