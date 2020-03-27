import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendors[]=[];
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
