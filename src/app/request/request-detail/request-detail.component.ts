import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request = new Request();
  setToReview():void{
    this.requestsvc.setToReview(this.request).subscribe(
      res=>{
        console.debug("worked", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("error", err);
      }
    );
  }
  setToApproved():void{
    this.requestsvc.setToApproved(this.request).subscribe(
      res=>{
        console.debug("worked", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("error", err);
      }
    );
  }
  setToRejected():void{
    this.requestsvc.setToRejected(this.request).subscribe(
      res=>{
        console.debug("worked", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("error", err);
      }
    );
  }
  delete():void{
    this.requestsvc.remove(this.request).subscribe(
      res=>{
        console.debug("Request deleted", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("error", err);
      }
    );
  }
  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res=>{
        this.request=res;
        console.debug("Request:",res);
      },
      err=>{
        console.error("Error",err);
      }
    );
  }

}
