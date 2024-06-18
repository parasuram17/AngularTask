import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Department } from '../models/Department';
import { Pagination } from '../models/Pagination';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'https://localhost:7072'

  constructor(private http:HttpClient) { }

  getData(page:number,limit:number):Observable<Response<Pagination<Department[]>>>{
    const httpOptions ={
      headers:new HttpHeaders({'Content-Type':'application/json' })
    }
    return this.http.get<Response<Pagination<Department[]>>>(`${this.apiUrl}/api/Department/?page=${page}&limit=${limit}`,httpOptions)
  }
}
