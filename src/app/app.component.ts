import { Component } from '@angular/core';
import { User } from './user/user.class';
import { Router } from '@angular/router';
import { AuthenticationService } from './system/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  title = 'PSR Client';
  constructor(
  ){
  }
}

