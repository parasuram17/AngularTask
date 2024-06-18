import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Employee } from '../models/Employee';
import { EmployeeRequest } from '../models/EmployeeRequest';
import { Pagination } from '../models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7072'

  constructor(private http: HttpClient) {}

  getData(page:number,limit:number):Observable<Response<Pagination<Employee[]>>>{
    const httpOptions ={
      headers:new HttpHeaders({'Content-Type':'application/json' })
    }
    return this.http.post<Response<Pagination<Employee[]>>>(`${this.apiUrl}/api/Employee/GetAll?page=${page}&limit=${limit}`,"", httpOptions)
  }

  postData(data : EmployeeRequest):Observable<Response<EmployeeRequest>>{
    return this.http.post<Response<EmployeeRequest>>(`${this.apiUrl}/api/Employee/`,data)
  }
  
  updateData(id:number, data : EmployeeRequest):Observable<Response<EmployeeRequest>>{
    return this.http.put<Response<EmployeeRequest>>(`${this.apiUrl}/api/Employee/${id}`,data)
  }
  deleteData(id:number):Observable<Response<boolean>>{
    return this.http.delete<Response<boolean>>(`${this.apiUrl}/api/Employee?id=${id}`)
  }
}
