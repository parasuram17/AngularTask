import { Component } from '@angular/core';
import { EmployeesTableRowComponent } from './employees-table-row/employees-table-row.component';


@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [EmployeesTableRowComponent],
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.css'
})
export class EmployeesTableComponent {

}
