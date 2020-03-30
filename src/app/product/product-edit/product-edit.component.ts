import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { throwError } from 'rxjs';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[]=[];
  sava():void{
    this.product.vendorId=Number(this.product.vendorId);
    this.prodsvc.change(this.product).subscribe(
      res=>{
        console.debug("Product change successful!", res);
        this.router.navigateByUrl("/product/list");
      },
      err=>{
        console.error("Error changing product", err);
      }
    );
  }
  constructor(
    private prodsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors=res;
        console.debug("Vendors:",res);
      },
      err=>{
        console.error("Error reading product", err);
      }
    );
    let id=this.route.snapshot.params.id;
    this.prodsvc.get(id).subscribe(
      res=>{
        this.product=res;
        console.debug("Product:",res);
      },
      err=>{
        console.error("Error reading product",err);
      }
    );
  }

}
