import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  requestLine: RequestLine;
  requestId: number;
  save():void{
    this.requestLine.requestId=this.requestId;
    this.reqLinesvc.create(this.requestLine).subscribe(
      res=>{
        console.debug("create worked", res);
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
    private request:Request
  ) { }

  ngOnInit(): void {
    this.requestId=this.route.snapshot.params.requestId;
  }

}
