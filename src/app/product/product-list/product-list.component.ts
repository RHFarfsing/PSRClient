import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SortPipe } from 'src/app/pipe/sort.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private product: ProductService,
    //private sort: SortPipe
  ) { }
  ngOnInit(): void {
    this.product.list().subscribe(
      res=>{
        this.products=res;
        console.debug("Product-List Products:", res);
      },
      err=>{
        console.error("Error product-list not found", err);
      }
    );
  }
}
