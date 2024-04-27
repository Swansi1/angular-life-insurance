import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './insurances.component.html',
  styleUrl: './insurances.component.css'
})

export class InsurancesComponent {
  favoriteColor = '';
}
