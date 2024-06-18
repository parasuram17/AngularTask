import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/Location';
import { Response } from '../../../models/Response';
import { ReactiveFormsModule } from '@angular/forms';
import { Department } from '../../../models/Department';

@Component({
  selector: 'app-filter-box',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.css'
})
export class FilterBoxComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private locationService:LocationService, private departmentService:DepartmentService){}
  
  ngOnInit(): void {
    this.getLocationData();
    this.getDepartmentData();
  }

  locations: Location[] = []
  departments: Department[] =[]

  getLocationData(){
    this.locationService.getData(1,10).subscribe(response=>{
      this.locations=response.data.data
    });
  }
  getDepartmentData(){
    this.departmentService.getData(1,10).subscribe(response=>{
      this.departments = response.data.data
    })
  }

  resetButtonEventListener() {
    let resetButton: HTMLButtonElement = document.querySelector(".btn-reset") as HTMLButtonElement;
    resetButton.addEventListener('click', () => {
        let alphabetButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-alphabet') as NodeListOf<HTMLButtonElement>;
        alphabetButtons.forEach((alphabetButton) => {
            alphabetButton.classList.remove('active')
        })
        let filterTags: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.filter-tags') as NodeListOf<HTMLSelectElement>;
        filterTags.forEach((filterTag) => {
            filterTag.selectedIndex = 0;
        })
        // postFilterStorage = employeeService.getEmployees();
        // filteredCharacters = []
        // clearEmployeeTableRows();
        // postFilterStorage.forEach((emp) => {
        //     insertEmployeeTableRow(emp);
        // })

        // highlightFilterIcon()
        // innerCheckBoxesEventListener();
        // ellipsesEventListener();
        // ellipsesEventListenerView();
        // ellipsesEventListenerEdit();
        // ellipsesEventListenerDelete();
    })
}

  applyButtonEventListener() {
    let filterApplyButton: HTMLButtonElement = document.querySelector('.btn-apply') as HTMLButtonElement;
    filterApplyButton.addEventListener('click', function () {
        // filterEmployeeTable();
    })
}
}
