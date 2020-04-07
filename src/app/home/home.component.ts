import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.class';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../system/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:User;
  users=[];
  constructor(
    private authsvc:AuthenticationService,
    private usersvc:UserService
  ) { 
    this.currentUser=this.authsvc.currentUserValue;
  }

  ngOnInit(): void {
  }
  deleteUser(id: number) {
    this.usersvc.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
}

private loadAllUsers() {
    this.usersvc.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}
}

