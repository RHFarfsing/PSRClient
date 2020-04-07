import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { Product } from 'src/app/product/product.class';


@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  requestLine:RequestLine=new RequestLine();
  save():void{
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
    private request:Request,
    private product:Product
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
  }

}
