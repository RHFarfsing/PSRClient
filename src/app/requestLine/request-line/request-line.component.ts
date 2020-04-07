import { Component, OnInit, } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestService } from 'src/app/request/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../request/request.class';
import { RequestLineService } from '../request-line.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent implements OnInit {
  // requestLines: RequestLine[]=[];
  request: Request;
  requestId: number = 0;
  delete(requestLines:RequestLine):void{
    this.reqsvc.remove(requestLines).subscribe(
      res=>{
        this.refresh();
        console.debug("Delete worked", res);
      },
      err=>{
        console.error("error",err);
      }
    );
  }
  refresh():void{
    this.requestsvc.get(this.requestId).subscribe(
      res=>{
        console.debug("refresh worked", res);
      },
      err=>{
        console.error("error", err);
      }
    );
  }
  constructor(
    private reqsvc: RequestLineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.id;
    this.requestsvc.get(this.requestId).subscribe(
      res=>{
        this.request=res;
        console.debug("Request", res);
      },
      err=>{
        console.error("Error", err);
      }
    );
  }

}
