import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  requestLine: RequestLine = new RequestLine();
  requestId: number;
  products:Product[]=[];
  save():void{
    this.requestLine.requestId=Number(this.requestId);
    this.requestLine.productId=Number(this.requestLine.productId);
    this.reqLinesvc.create(this.requestLine).subscribe(
      res=>{
        console.debug("create worked", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("error creating", err);
      }
    );
  }
  constructor(
    private reqLinesvc:RequestLineService,
    private route:ActivatedRoute,
    private router:Router,
    private prodsvc:ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res=>{
        this.products=res;
        console.debug("Products:", res);
      },
      err=>{
        console.error("Error", err);
      }
      );
      this.requestId=this.route.snapshot.params.id;
    }    
}
