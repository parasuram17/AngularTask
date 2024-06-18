import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCheckboxesComponent } from './employee-checkboxes.component';

describe('EmployeeCheckboxesComponent', () => {
  let component: EmployeeCheckboxesComponent;
  let fixture: ComponentFixture<EmployeeCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCheckboxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
