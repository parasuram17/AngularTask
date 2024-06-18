import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Location } from '../models/Location';
import { Pagination } from '../models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://localhost:7072'

  constructor(private http:HttpClient) { }

  getData(page:number,limit:number):Observable<Response<Pagination<Location[]>>>{
    const httpOptions ={
      headers:new HttpHeaders({'Content-Type':'application/json' })
    }
    return this.http.get<Response<Pagination<Location[]>>>(`${this.apiUrl}/api/Location/?page=${page}&limit=${limit}`,httpOptions)
  }
}
