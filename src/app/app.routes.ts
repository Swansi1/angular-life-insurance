import {Routes} from '@angular/router';
import {InsurancesComponent} from "./insurances/insurances.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: 'kezdolap', component: HomeComponent},
  {path: 'biztositas', component: InsurancesComponent},
  {path: '', redirectTo: '/kezdolap', pathMatch: 'full'},
  {path: '**', component: HomeComponent},

];
