import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './request-line.class';
import { HttpClient } from '@angular/common/http';
const url:string="http://localhost:58727/api/requestlines";
@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  list():Observable<RequestLine[]>{
    return this.http.get(`${url}`)as Observable<RequestLine[]>;
  }
  change(requestLine: RequestLine):Observable<any>{
    return this.http.put(`${url}/${requestLine.id}`, requestLine)as Observable<any>;
  }
  create(requestLine: RequestLine): Observable<RequestLine>{
    return this.http.post(`${url}/${requestLine.requestId}`, requestLine)as Observable<RequestLine>;
  }
  remove(requestLine: RequestLine): Observable<RequestLine>{
    return this.http.delete(`${url}/${requestLine.id}`)as Observable<RequestLine>;
  }
  constructor(
    private http: HttpClient
  ) { }
}
