import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.user.email = "";
    this.user.password = "";
  }

  goToProfile(uid){
    window.alert("Autenticación Correcta");
    this.router.navigate(['perfil/' + uid]);
  }

  login(){
    const promise = this.authService.logIn(this.user.email, this.user.password);
    promise
    .then(data => this.goToProfile(data.user.uid))
    .catch(e => console.log(e.message));
  }

}
