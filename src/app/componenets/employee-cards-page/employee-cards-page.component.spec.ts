import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardsPageComponent } from './employee-cards-page.component';

describe('EmployeeCardsPageComponent', () => {
  let component: EmployeeCardsPageComponent;
  let fixture: ComponentFixture<EmployeeCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCardsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
