import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-checkboxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-checkboxes.component.html',
  styleUrl: './employee-checkboxes.component.css'
})
export class EmployeeCheckboxesComponent {
  employeeObjects:Employee[] = [{
    id:0,
    profilePicture : "",
    firstName:"string",
    lastName:"string",
    emailId:"string",
    location:"string",
    dob:"string",
    phoneNo:"string",
    department:"string",
    jobTitle:"string",
    employeeId:"string",
    joinDate:"string",
    manager:"string",
    project:"string",
    }]

}
