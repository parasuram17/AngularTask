import { Component } from '@angular/core';
import { Employee } from '../../../models/Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  employeeObjects : Employee[] = [{
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
    project:"string"
  }]
}
