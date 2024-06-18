import { Routes } from '@angular/router';
import { EmployeesPageComponent } from './componenets/employees-page/employees-page.component';
import { RolesPageComponent } from './componenets/roles-page/roles-page.component';
import { EmployeeCardsPageComponent } from './componenets/employee-cards-page/employee-cards-page.component';
import { AddRolesPageComponent } from './componenets/add-roles-page/add-roles-page.component';
import { AddEmployeesPageComponent } from './componenets/add-employees-page/add-employees-page.component';

export const routes: Routes = [
    {path: "", component: EmployeesPageComponent},
    {path: "roles", component: RolesPageComponent},
    {path: "employees", component:EmployeeCardsPageComponent},
    {path: "addRoles", component:AddRolesPageComponent},
    {path: "addEmployees",component:AddEmployeesPageComponent},
    {path: "**",component:EmployeesPageComponent}
];
