import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../system/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  returnUrl:string='';
  constructor(
    private fromBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private authsvc:AuthenticationService
  ) { 
    if(this.authsvc.currentUserValue){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm=this.fromBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl' || '/'];
  }
  get f(){return this.loginForm.controls;}
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.authsvc.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      res=>{
        this.router.navigate([this.returnUrl]);
        console.debug("Login good", res);
      },
      err=>{
        console.error("Error",err);
      }
    );
  }
}
