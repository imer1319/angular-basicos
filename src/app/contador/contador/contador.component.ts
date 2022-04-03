import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo</h1>
    <h4>{{ titulo }}</h4>
    <h3>La base es de : <strong>{{ base }}</strong></h3>
    <button (click)=" acumular(base) "> + {{ base }} </button>
    <span>{{ numero }}</span>
    <button (click)=" acumular(-base) "> - {{ base }} </button>
  `
})
export class ContadorComponent {
  titulo: string = 'Contador app';
  numero: number = 10;
  base: number = 6;

  acumular(valor: number) {
    this.numero += valor;
  }
}
