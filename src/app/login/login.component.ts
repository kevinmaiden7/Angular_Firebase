import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  sub: Subscription;
  user: any = {};

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.user.email = "";
    this.user.password = "";
    console.log("entering login");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  login(form: NgForm){
    console.log("Trying to log in");
    const promise = this.authService.logIn(this.user.email, this.user.password);
    promise
    .then(data => this.state(data))
    .catch(e => console.log(e.message));
  }

  logout(){
    console.log("Trying to log out");
    const promise = this.authService.logOut();
    promise
    .then(data => this.state(data))
    .catch(e => console.log(e.message));
  }

  state(data){
    if(data){
      console.log("Logged in!");
      console.log(data);
      console.log(data.user.email);
      console.log(data.user.uid);
    }else console.log("Not logged in");
  }
}
