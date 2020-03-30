import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vendor } from './vendor.class';
import { HttpClient } from '@angular/common/http';
const url: string = "http://localhost:58727/api/vendors";
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  list():Observable<Vendor[]>{
    return this.http.get(`${url}`)as Observable<Vendor[]>;
  }
  get(id: any): Observable<Vendor>{
    return this.http.get(`${url}/${id}`)as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor>{
    return this.http.post(`${url}`, vendor)as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any>{
    return this.http.put(`${url}/${vendor.id}`, vendor)as Observable<any>;
  }
  remove(vendor: Vendor): Observable<Vendor>{
    return this.http.delete(`${url}/${vendor.id}`)as Observable<Vendor>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
