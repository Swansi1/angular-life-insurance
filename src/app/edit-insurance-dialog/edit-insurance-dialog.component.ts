import {Component, Inject} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';

import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-edit-insurance-dialog',
  templateUrl: './edit-insurance-dialog.component.html',
  standalone: true,
  imports: [
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule,
    MatLabel,
    MatFormField
  ],
  styleUrls: ['./edit-insurance-dialog.component.css']
})
export class EditInsuranceDialogComponent {
  editForm = new FormGroup({
    fullName: new FormControl(this.data.insurance.fullName),
    email: new FormControl(this.data.insurance.email),
  });

  constructor(
    public dialogRef: MatDialogRef<EditInsuranceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { insurance: any }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.editForm.value);
  }
}
