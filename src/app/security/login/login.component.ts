import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(
      private router: Router,
      private authService: AuthService,
      private firestoreService: FirestoreService
  ) { 
    // redirect to home if already logged in
    if (this.authService.authenticated) { 
      window.alert("Ya está autenticado");
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.user.email = "";
    this.user.password = "";
  }

  loginSuccess(uid){
    this.firestoreService.fetchUser(uid).then(doc => {
      const data = doc.data();
      localStorage.setItem('uid', uid);
      localStorage.setItem('rol', data.rol);
      localStorage.setItem('email', data.email);
      localStorage.setItem('authenticated', "true");
      window.alert("Autenticación Correcta");
      this.router.navigate(['/']);
    });
  }

  login(){
    const promise = this.authService.logIn(this.user.email, this.user.password);
    promise
    .then(data => this.loginSuccess(data.user.uid))
    .catch(e => window.alert(e.message));
  }

}
