import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floristeria la Gardenia' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas felices' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapatería el Clavo' }
  ];
  personas: any = [
    { name: "Sergio", age: 24 },
    { name: "Juliana", age: 26 },
    { name: "Pepe", age: 30 },
    { name: "Roberto", age: 55 },
    { name: "Valentia", age: 9 },
    { name: "Nicol", age: 12 }
  ]
  lat: number = 5.5463022;
  lng: number = -73.3514267;

  constructor() { }

  ngOnInit() {
  }

}
