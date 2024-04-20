import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
