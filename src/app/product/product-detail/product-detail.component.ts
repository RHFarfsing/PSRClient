import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private route:ActivatedRoute,
    private prodsvc: ProductService,
    private router: Router
  ) { }
    delete(): void{
      this.prodsvc.remove(this.product).subscribe(
        res=>{
          console.debug("Product delete successful!", res);
          this.router.navigateByUrl("/products/list");
        },
        err=>{
          console.error("Product delete failed!", err);
        }
      );
    }
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.prodsvc.get(id).subscribe(
      res=>{
        this.product=res;
        console.debug("Product:", res);
      },
      err=>{
        console.error("Error on Product.get()", err);
      }
    );
  }

}
