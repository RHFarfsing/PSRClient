import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ProductService } from '../product.service';
import { Router, } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[]=[];
  save():void{
    this.product.vendorId = Number(this.product.vendorId);
    this.prodsvc.create(this.product).subscribe(
      res=>{
        console.debug("Product Created!", res);
        this.router.navigateByUrl("/products/list");
      },
      err=>{
        console.error("Creation error", err);
      }
    );
  }
  constructor(
    private prodsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors = res;
        console.debug("Vendors:", res);
      },
      err=>{
        console.error("Error", err);
      }
    );
  }

}
