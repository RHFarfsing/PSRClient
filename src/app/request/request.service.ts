import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';
const url: string = "http://localhost:58727/api/requests";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list(): Observable<Request[]>{
    return this.http.get(`${url}`)as Observable<Request[]>;
  }
  setToReview(request: Request): Observable<any>{
    return this.http.put(`${url}/review`, request)as Observable<any>;
  }
  setToApproved(request: Request): Observable<any>{
    return this.http.post(`${url}/approved`, request)as Observable<any>;
  }
  setToRejected(request: Request): Observable<any>{
    return this.http.post(`${url}/rejected`, request)as Observable<any>;
  }
  get(id: any): Observable<Request>{
    return this.http.get(`${url}/${id}`)as Observable<Request>;
  }
  create(request: Request): Observable<Request>{
    return this.http.post(`${url}`, request)as Observable<Request>;
  }
  change(request: Request): Observable<Request>{
    return this.http.put(`${url}/${request.id}`, request)as Observable<Request>;
  }
  remove(request: Request): Observable<Request>{
    return this.http.delete(`${url}/${request.id}`)as Observable<Request>;
  }
  constructor(
    private http: HttpClient
  ) { }
}
