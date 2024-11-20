import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  monedaQ: number | null = null; 
  monedaUSD: number | null = null; 

  readonly tasaCambio: number = 8;

  constructor() {}

  convertirDivisa() {
    if (this.monedaQ !== null && this.monedaQ > 0) {
      this.monedaUSD = this.monedaQ / this.tasaCambio;
    } else {
      this.monedaUSD = null;
      alert('Por favor, ingresar una cantidad válida en quetzales.');
    }
  }

}
