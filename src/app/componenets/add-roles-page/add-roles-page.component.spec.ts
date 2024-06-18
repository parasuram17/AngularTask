import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolesPageComponent } from './add-roles-page.component';

describe('AddRolesPageComponent', () => {
  let component: AddRolesPageComponent;
  let fixture: ComponentFixture<AddRolesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRolesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRolesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
