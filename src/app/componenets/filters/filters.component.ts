import { Component } from '@angular/core';
import { AlphabetFilterComponent } from './alphabet-filter/alphabet-filter.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [AlphabetFilterComponent, FilterBoxComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

}
