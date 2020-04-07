import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../system/authentication.service';
import { User } from '../user/user.class';
import { UserService } from '../user/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User = new User();
  message: string = '';

  constructor(
    private authsvc: AuthenticationService,
    private router:Router,
    private usersvc: UserService
  ) { }

  login(): void {
    this.usersvc.login(this.user).subscribe(
      res=>{
        this.authsvc.currentUser=res;
        console.debug("login worked", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        this.message="User not found.";
        console.error("error on login", err);
      }
    );
  }

  ngOnInit(): void {
  }
}
