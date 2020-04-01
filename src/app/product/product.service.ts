import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';
const url:string="http://localhost:58727/api/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
//  [x: string]: any;
  list():Observable<Product[]>{
    return this.http.get(`${url}`)as Observable<Product[]>;
  }
  get(id: any): Observable<Product>{
    return this.http.get(`${url}/${id}`)as Observable<Product>;
  }
  create(product: Product): Observable<Product>{
    return this.http.post(`${url}`, product)as Observable<Product>;
  }
  change(product: Product): Observable<any>{
    return this.http.put(`${url}/${product.id}`, product)as Observable<any>;
  }
  remove(product: Product): Observable<any> {
    return this.http.delete(`${url}/${product.id}`)as Observable<Product>;
  }
  constructor(
    private http: HttpClient
  ) { }
}
