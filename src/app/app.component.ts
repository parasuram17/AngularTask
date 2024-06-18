import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftNavbarComponent } from './componenets/left-navbar/left-navbar.component';
import { SearchBarComponent } from './componenets/search-bar/search-bar.component';
import { EmployeesPageComponent } from './componenets/employees-page/employees-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftNavbarComponent, SearchBarComponent, EmployeesPageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeDirectory';
}
