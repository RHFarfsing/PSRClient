import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SortByPipe } from 'src/app/pipe/sort.pipe';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[]=[];
  
  constructor(
    private vendor: VendorService,
    //private sort: SortByPipe
  ) { }

  ngOnInit(): void {
    this.vendor.list().subscribe(
      res=>{
        this.vendors=res;
        console.debug("Vendor-list Vendors:",res);
      },
      err=>{
        console.error(err);
      }
    );
  }

}
