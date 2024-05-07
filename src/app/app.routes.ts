import {Routes} from '@angular/router';
import {InsurancesComponent} from "./insurances/insurances.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {InsuranceFormComponent} from "./insurance-form/insurance-form.component";
import {InsuranceSearchComponent} from "./insurance-search/insurance-search.component";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'new-insurance', component: InsuranceFormComponent},
  {path: 'insurances', component: InsurancesComponent, canActivate: [authGuard]},
  {path: 'insurance-search', component: InsuranceSearchComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];
