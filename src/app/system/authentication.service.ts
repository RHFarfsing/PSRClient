import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user/user.class';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser=this.currentUserSubject.asObservable();
  }
  public get currentUserValue():User{
    return this.currentUserSubject.value;
  }
  login(username, password){
    return this.http.post<any>(`${URL}/users/authenticate`,{username, password}).pipe(map(user=>{
      localStorage.setItem('currentUser',JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
