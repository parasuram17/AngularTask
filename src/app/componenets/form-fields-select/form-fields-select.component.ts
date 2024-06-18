import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Option } from '../../models/Option';

@Component({
  selector: 'app-form-fields-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-fields-select.component.html',
  styleUrl: './form-fields-select.component.css'
})
export class FormFieldsSelectComponent {
  @Input () id:string = "";
  @Input () class:string = "";
  @Input () label:string = "";
  @Input () name:string = "";
  @Input () options:Option[] = [];
}
