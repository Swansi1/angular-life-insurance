import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Insurance} from "../models/insurance";
import {FirebaseService} from "../services/firebase-service.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {ReversePipe} from "../pipe/reverse.pipe";

@Component({
  selector: 'app-insurance-search',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatProgressSpinner,
    MatRow,
    MatRowDef,
    MatTable,
    NgIf,
    MatHeaderCellDef,
    MatInput,
    MatLabel,
    ReversePipe
  ],
  templateUrl: './insurance-search.component.html',
  styleUrl: './insurance-search.component.css'
})
export class InsuranceSearchComponent {
  searchQuery: string = '';
  displayedColumns: string[] = ['fullName', 'email'];
  insurances: { [p: string]: any; id: string }[] = [];
  insurancesEmail: { [p: string]: any; id: string }[] = [];
  protected isLoading: boolean = false;
  protected isLoadingEmail: boolean = false;
  searchQueryEmail: string = '';

  constructor(private firebaseService: FirebaseService) {}

  async search() {
    this.isLoading = true;

    try {
      this.insurances = await this.firebaseService.searchInsurancesByName(this.searchQuery);
    } catch (error) {
      console.error('Failed to load insurances:', error);
    }

    this.isLoading = false;
  }

  async searchEmail() {
    this.isLoadingEmail = true;

    try {
      this.insurancesEmail = await this.firebaseService.searchInsurancesByEmail(this.searchQueryEmail);
    } catch (error) {
      console.error('Failed to load insurances:', error);
    }

    this.isLoadingEmail = false;
  }
}
