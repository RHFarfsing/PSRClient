import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor=new Vendor();
  save(): void{
    this.vendorsvc.change(this.vendor).subscribe(
      res=>{
        console.debug("Vendor change successful!",res);
        this.router.navigateByUrl("/vendors/list");
      },
      err=>{
        console.error("Error changing Vendor", err);
      }
    );
  }
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res=>{
        this.vendor = res;
        console.debug("Vendor:", res);
      },
      err=>{
        console.error("Error editing Vendor:", err);
      }
    );
  }

}
