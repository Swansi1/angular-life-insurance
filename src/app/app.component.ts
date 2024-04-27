import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {HomeComponent} from "./home/home.component";
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HomeComponent,
    FlexLayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'Életbiztosítás kötés';

  constructor() {
    console.log('AppComponent.constructor()');
  }
}
