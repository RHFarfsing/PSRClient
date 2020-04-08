import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';


@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  requestLine:RequestLine=new RequestLine();
  product:Product[]=[];
  request:Request;
  save():void{
    this.requestLine.productId=Number(this.requestLine.productId);
    this.reqsvc.change(this.requestLine).subscribe(
      res=>{
        console.debug("RequestLine change successful", res);
        this.router.navigateByUrl("/requestlines/request-line");
      },
      err=>{
        console.error("error changing", err);
      }
    );
  }
  constructor(
    private reqsvc:RequestLineService,
    private route:ActivatedRoute,
    private router:Router,
    private requestsvc:RequestService,
    private productsvc:ProductService
  ) { }

  ngOnInit(): void {
    let requestid = this.route.snapshot.params.id;
    this.requestsvc.get(requestid).subscribe(
      res=>{
        this.request=res;
        console.debug("Request", res);
      },
      err=>{
        console.error("editing error", err);
      }
    );
    this.productsvc.list().subscribe(
      res=>{
        this.product=res;
        console.debug("Products:", res);
      },
      err=>{
        console.error("Error reading", err);
      }
    );
    let id=this.route.snapshot.params.id;
    this.reqsvc.get(id).subscribe(
      res=>{
        this.requestLine=res;
        console.debug("RequestLine:", res);
      },
      err=>{
        console.error("Error", err);
      }
    );
  }

}
