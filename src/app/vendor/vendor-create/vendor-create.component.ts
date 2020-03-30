import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor:Vendor=new Vendor();
  save():void{
    this.vendorsvc.create(this.vendor).subscribe(
      res=>{
        console.debug("Vendor Created!", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err=>{
        console.error("error creating vendor", err);
      }
    );
  }
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
    
}
