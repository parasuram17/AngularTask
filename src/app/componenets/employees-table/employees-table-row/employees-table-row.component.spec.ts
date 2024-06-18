import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTableRowComponent } from './employees-table-row.component';

describe('EmployeesTableRowComponent', () => {
  let component: EmployeesTableRowComponent;
  let fixture: ComponentFixture<EmployeesTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
