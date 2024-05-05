import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsuranceDialogComponent } from './edit-insurance-dialog.component';

describe('EditInsuranceDialogComponent', () => {
  let component: EditInsuranceDialogComponent;
  let fixture: ComponentFixture<EditInsuranceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInsuranceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInsuranceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
