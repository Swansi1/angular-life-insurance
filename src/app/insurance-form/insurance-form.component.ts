import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FirebaseService} from "../services/firebase-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-insurance-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckbox,
    FlexLayoutModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'hu' },
  ],
  templateUrl: './insurance-form.component.html',
  styleUrl: './insurance-form.component.css'
})
export class InsuranceFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private insuranceService: FirebaseService, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      birthDate: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+36\d{9}$/)]],
      address: ['', [Validators.required]],
      smoker: [false],
      healthIssues: [''],
      coverageAmount: [null, [Validators.required, Validators.min(1)]],
      duration: [null, [Validators.required, Validators.min(1)]],
      paymentMethod: ['', [Validators.required]],
      gender: [''],
    });
  }

  submit() {
    if (this.form.valid) {
      this.insuranceService.addInsurance(this.form.value).then(() => {
        this.snackBar.open('Insurance created successfully.', 'Close', {
          duration: 2000,
        });
      }).catch((error) => {
        this.snackBar.open('Failed to create new Insurance.', 'Close', {
          duration: 2000,
        });
        console.error(error);
      });

      this.form.reset();
    }
  }
}
