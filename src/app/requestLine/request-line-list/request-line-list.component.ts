import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  requestlines: RequestLine[]=[];
  constructor(
    private requestLine: RequestLineService
  ) { }

  ngOnInit(): void {
    this.requestLine.list().subscribe(
      res=>{
        this.requestlines=res;
        console.debug("RequestLines", res);
      },
      err=>{
        console.error(err);
      }
    );
  }

}
