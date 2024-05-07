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
import {MatSnackBar} from "@angular/material/snack-bar";
import {EditInsuranceDialogComponent} from "../edit-insurance-dialog/edit-insurance-dialog.component";
import {MatDialog} from "@angular/material/dialog";


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

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService, private snackBar: MatSnackBar) {}

  async ngOnInit(): Promise<void> {
    try {
      this.insurances = await this.firebaseService.getAllInsurances();
    } catch (error) {
      console.error('Failed to load insurances:', error);
    }
    this.isLoading = false;
  }

  editInsurance(insurance: Insurance) {
    console.log('Editing insurance:', insurance);
    const dialogRef = this.dialog.open(EditInsuranceDialogComponent, {
      width: '250px',
      data: { insurance }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        // find insurance in the array and update it. result return only fullname and email
        const index = this.insurances.findIndex(i => i.id === insurance.id);
        console.log('Index:', index);
        this.insurances[index] = result;

        await this.firebaseService.updateInsurance(insurance.id, result);

        this.snackBar.open('Data successfully updated', 'Close', {
          duration: 2000,
        });
        console.log('Edited data:', result);
      }
    });
  }

  async deleteInsurance(insurance: Insurance) {
    console.log('Deleting insurance:', insurance);
    try {
      await this.firebaseService.deleteInsurance(insurance.id);
      this.insurances = this.insurances.filter(i => i.id !== insurance.id);
      this.snackBar.open('Data successfully deleted', 'Close', {
        duration: 2000,
      });
    } catch (error) {
      console.error('Failed to delete insurance:', error);
    }
  }
}
