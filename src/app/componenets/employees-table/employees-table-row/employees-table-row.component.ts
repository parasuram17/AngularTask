import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees-table-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-table-row.component.html',
  styleUrl: './employees-table-row.component.css'
})
export class EmployeesTableRowComponent  {

  constructor(private employeeService: EmployeeService) { }

  employeeObjects:Employee[] = [];

  ngOnInit(): void {
    this.getData();
  }
  getData():void{
    this.employeeService.getData(1,10).subscribe(response=> this.employeeObjects = response.data.data)
  }
  status = 'Active'
}
