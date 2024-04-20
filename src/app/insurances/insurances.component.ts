import { Component } from '@angular/core';
import {Insurance} from "../insurance";

@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [],
  templateUrl: './insurances.component.html',
  styleUrl: './insurances.component.css'
})
export class InsurancesComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  insurances = [
    {
      id: 1,
      name: 'Életbiztosítás',
      price: 1000,
      description: 'Életbiztosítás leírása',
      people: {
        name: 'John Doe',
        birthDate: new Date('1980'),
      }
    }
  ];
}
