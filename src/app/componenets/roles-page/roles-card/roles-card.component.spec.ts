import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCardComponent } from './roles-card.component';

describe('RolesCardComponent', () => {
  let component: RolesCardComponent;
  let fixture: ComponentFixture<RolesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
