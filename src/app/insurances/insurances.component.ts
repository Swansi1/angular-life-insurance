import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FirebaseService} from "../services/firebase-service.service";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Insurance} from "../models/insurance";


@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [
    FormsModule,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    NgIf,
    MatProgressSpinner,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './insurances.component.html',
  styleUrl: './insurances.component.css'
})

export class InsurancesComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'edit', 'delete'];
  insurances: { [p: string]: any; id: string }[] = []; // Store insurance data as an array
  isLoading = true;

  constructor(private firebaseService: FirebaseService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.insurances = await this.firebaseService.getAllInsurances();
      console.log(this.insurances);
    } catch (error) {
      console.error('Failed to load insurances:', error);
    }
    this.isLoading = false;
  }

  editInsurance(insurance: Insurance) {
    console.log('Editing insurance:', insurance);
    // TODO
  }

  deleteInsurance(insurance: Insurance) {
    console.log('Deleting insurance:', insurance);
    // TODO
  }
}
