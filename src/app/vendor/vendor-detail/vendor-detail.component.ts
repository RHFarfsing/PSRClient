import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = new Vendor(); 
  constructor(
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router
  ) { }
delete(): void{
  this.vendorsvc.remove(this.vendor).subscribe(
    res=>{
      console.debug("Vendor delete successfull!", res);
      this.router.navigateByUrl("/venders/list");
    },
    err=>{
      console.error("Vender delete failed!", err);
    }
  );
}
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res=>{
        this.vendor=res;
        console.debug("Vendor:",res);
      },
      err=>{
        console.error("Error on Vendor.get()",err);
      }      
    );
  }

}
