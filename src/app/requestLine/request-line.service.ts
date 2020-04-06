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
  constructor(
    private http: HttpClient
  ) { }
}
