import { Component } from '@angular/core';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@Component({
  selector: 'app-employee-cards-page',
  standalone: true,
  imports: [EmployeeCardComponent],
  templateUrl: './employee-cards-page.component.html',
  styleUrl: './employee-cards-page.component.css'
})
export class EmployeeCardsPageComponent {

}
