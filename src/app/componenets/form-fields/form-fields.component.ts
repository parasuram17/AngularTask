import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {
  @Input() type:string = "";
  @Input() id:string = "";
  @Input() class:string = "";
  @Input() label:string = "";
  @Input() placeholder:string ="";
  @Input() name:string="";
  @Input() isDateInput:boolean = false;
  @Input() isRequired:boolean = false;
  @Input() pattern?:string;
  @Input() maxDate?:string;
  @Input() width?:string = "10rem";
  @Input() height?:string = "1.5rem";
  @Input() innerClass?:string = "inpt-box";
}
