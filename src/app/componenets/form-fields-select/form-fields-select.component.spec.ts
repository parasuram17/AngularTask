import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsSelectComponent } from './form-fields-select.component';

describe('FormFieldsSelectComponent', () => {
  let component: FormFieldsSelectComponent;
  let fixture: ComponentFixture<FormFieldsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldsSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
