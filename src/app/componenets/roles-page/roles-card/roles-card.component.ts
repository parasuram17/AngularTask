import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Role } from '../../../models/Role';

@Component({
  selector: 'app-roles-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles-card.component.html',
  styleUrl: './roles-card.component.css'
})
export class RolesCardComponent {
  roleObjects: Role[] = [{
    id:0,
    name:"string",
    description: "string",
    location:"string",
    department:"string",
    imgArray:[] 
  }];
  cardId = 1;
}
