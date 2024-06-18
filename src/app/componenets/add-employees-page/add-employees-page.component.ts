import { Component } from '@angular/core';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { FormFieldsSelectComponent } from '../form-fields-select/form-fields-select.component';
import { Employee } from '../../models/Employee';
import { Role } from '../../models/Role';
import { Location } from '../../models/Location';
import { Project } from '../../models/Project';
import { Option } from '../../models/Option';

@Component({
  selector: 'app-add-employees-page',
  standalone: true,
  imports: [FormFieldsComponent, FormFieldsSelectComponent],
  templateUrl: './add-employees-page.component.html',
  styleUrl: './add-employees-page.component.css'
})
export class AddEmployeesPageComponent {
  locationOptions=[{id:1,name:"name"}];
  roleOptions= [{id:1,name:"name"}];
  managerOptions= [{id:1,name:"name"}];
  projectOptions= [{id:1,name:"name"}];
}
