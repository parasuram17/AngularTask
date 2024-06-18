import { Component } from '@angular/core';
import { FilterBoxComponent } from '../filters/filter-box/filter-box.component';
import { RolesCardComponent } from './roles-card/roles-card.component';

@Component({
  selector: 'app-roles-page',
  standalone: true,
  imports: [FilterBoxComponent, RolesCardComponent],
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.css'
})
export class RolesPageComponent {

}
