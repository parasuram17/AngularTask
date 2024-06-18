import { Component } from '@angular/core';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { FormFieldsSelectComponent } from '../form-fields-select/form-fields-select.component';
import { EmployeeCheckboxesComponent } from '../employee-checkboxes/employee-checkboxes.component';
import { Option } from '../../models/Option';

@Component({
  selector: 'app-add-roles-page',
  standalone: true,
  imports: [FormFieldsComponent, FormFieldsSelectComponent,EmployeeCheckboxesComponent],
  templateUrl: './add-roles-page.component.html',
  styleUrl: './add-roles-page.component.css'
})
export class AddRolesPageComponent {
  locationOptions:Option[] = []
  departmentOptions:Option[] = []
}
