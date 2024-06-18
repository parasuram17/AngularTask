import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { FiltersComponent } from '../filters/filters.component';
import { EmployeesTableComponent } from '../employees-table/employees-table.component';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [FiltersComponent, EmployeesTableComponent],
  templateUrl: './employees-page.component.html',
  styleUrl: './employees-page.component.css'
})
export class EmployeesPageComponent implements AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addEmployeeButtonEventListener();
      this.exportToCSVEventListener();
    }
  }

  addEmployeeButtonEventListener() {
    let addEmployeeButton: HTMLButtonElement = this.document.getElementById('button-add-employee') as HTMLButtonElement
    if (addEmployeeButton) {
      addEmployeeButton.addEventListener("click", () => {
        localStorage.removeItem('viewData');
        localStorage.removeItem('editData');
        location.href = "addEmployees";
      })
    }
  }
  exportToCSVEventListener() {
    let exportButton: HTMLButtonElement = document.getElementById('export-button') as HTMLButtonElement;
    if (exportButton) {
      exportButton.addEventListener('click', () => {
        let rows: Array<Employee> = [] as Array<Employee>;
        let data = [];
        let headers = ['Name', 'Email', 'Location', 'Department', 'Role', 'Employee Id', 'Join Date'];
        data.push(headers.join(","));
        rows.forEach((r) => {
          let row: string[] = [];
          row.push(r.firstName + " " + r.lastName);
          row.push(r.emailId);
          row.push(r.location);
          row.push(r.department);
          row.push(r.jobTitle);
          row.push(r.employeeId);
          row.push(r.joinDate);
          data.push(row.join(","));
        })
        this.downloadFile(data.join("\n"))

      })
    }
  }
  downloadFile(csv: string, file: string = "Employees_" + Date.now().toString() + ".csv") {
    let csv_file, download_link;
    csv_file = new Blob([csv], { type: "text/csv" });
    download_link = document.createElement('a');
    download_link.download = file;
    download_link.href = window.URL.createObjectURL(csv_file);
    download_link.style.display = "none";
    document.body.appendChild(download_link);
    download_link.click();
  }
}
